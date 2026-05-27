import express from 'express'
import http from 'node:http'
import crypto from 'node:crypto'
import { Server as SocketIOServer } from 'socket.io'
import { PrismaClient } from '../../app/src/generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import { auth } from '../../app/src/lib/auth'

const PORT = Number(process.env.SOCKET_SERVER_PORT ?? 4000)
const STAFF_ROLES = new Set(['support', 'manager', 'admin', 'owner'])

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
})

function requireInternalSecret(req: express.Request) {
  const secret = process.env.SOCKET_SERVER_SECRET
  if (!secret) return false
  return req.header('x-socket-secret') === secret
}

function getCookieFromSocketHeaders(headers: Record<string, unknown>) {
  const cookie = headers?.cookie
  return typeof cookie === 'string' ? cookie : ''
}

async function getSessionFromCookie(cookie: string) {
  const headers = new Headers()
  if (cookie) headers.set('cookie', cookie)
  return auth.api.getSession({ headers })
}

const app = express()
app.use(express.json({ limit: '2mb' }))

app.post('/internal/emit', (req, res) => {
  if (!requireInternalSecret(req)) return res.status(401).json({ ok: false })
  const body = req.body as any
  req.app.emit('internal:emit', body)
  return res.json({ ok: true })
})

const server = http.createServer(app)
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.WEB_ORIGIN
      ? process.env.WEB_ORIGIN.split(',')
          .map((v) => v.trim())
          .filter(Boolean)
      : true,
    credentials: true,
  },
})

io.use(async (socket, next) => {
  try {
    const cookie = getCookieFromSocketHeaders(socket.request.headers as any)
    const session = await getSessionFromCookie(cookie)
    if (!session?.user?.id) return next(new Error('Unauthorized'))

    socket.data.userId = session.user.id
    socket.data.role = session.user.role ?? null
    socket.data.isStaff = typeof session.user.role === 'string' && STAFF_ROLES.has(session.user.role)
    return next()
  } catch {
    return next(new Error('Unauthorized'))
  }
})

io.on('connection', (socket) => {
  socket.on('dev:broadcast', (payload: { text?: unknown }) => {
    if (process.env.NODE_ENV === 'production') return
    const text = String(payload?.text ?? '').trim()
    if (!text) return
    io.emit('dev:broadcast', {
      id: crypto.randomUUID(),
      text,
      from: socket.data.userId,
      timestamp: new Date().toISOString(),
    })
  })

  socket.on('join-ticket', async ({ ticketId }: { ticketId: string }) => {
    const ticket = await prisma.ticket.findUnique({
      where: { ticketId },
      select: { id: true, ticketId: true, userId: true },
    })
    if (!ticket) return socket.emit('error', { message: 'Ticket not found' })

    const allowed = socket.data.isStaff === true || ticket.userId === socket.data.userId
    if (!allowed) return socket.emit('error', { message: 'Forbidden' })

    socket.join(`ticket:${ticket.ticketId}`)
    socket.emit('joined-ticket', { ticketId: ticket.ticketId })
  })

  socket.on('leave-ticket', ({ ticketId }: { ticketId: string }) => {
    socket.leave(`ticket:${ticketId}`)
    socket.emit('left-ticket', { ticketId })
  })

  socket.on(
    'send-message',
    async ({ ticketId, content, attachments }: { ticketId: string; content: string; attachments?: unknown }) => {
      const ticket = await prisma.ticket.findUnique({
        where: { ticketId },
        select: { id: true, ticketId: true, userId: true },
      })
      if (!ticket) return socket.emit('error', { message: 'Ticket not found' })

      const allowed = socket.data.isStaff === true || ticket.userId === socket.data.userId
      if (!allowed) return socket.emit('error', { message: 'Forbidden' })

      const trimmed = String(content ?? '').trim()
      if (!trimmed) return

      const senderRole =
        socket.data.role === 'admin' || socket.data.role === 'owner'
          ? 'ADMIN'
          : socket.data.isStaff
            ? 'SUPPORT'
            : 'USER'

      const message = await prisma.ticketMessage.create({
        data: {
          ticketId: ticket.id,
          senderId: socket.data.userId,
          senderRole,
          content: trimmed,
          attachments: attachments ?? undefined,
        },
      })

      io.to(`ticket:${ticket.ticketId}`).emit('new-message', {
        type: 'new-message',
        message,
      })
    },
  )

  socket.on('typing', ({ ticketId }: { ticketId: string }) => {
    socket.to(`ticket:${ticketId}`).emit('typing', { ticketId, userId: socket.data.userId })
  })

  socket.on('stop-typing', ({ ticketId }: { ticketId: string }) => {
    socket.to(`ticket:${ticketId}`).emit('stop-typing', { ticketId, userId: socket.data.userId })
  })
})

app.on('internal:emit', (body: any) => {
  if (!body?.event) return

  if (body.event === 'dev:broadcast') {
    io.emit('dev:broadcast', body.payload)
    return
  }

  if (body.event === 'ticket:new-message') {
    const ticketId = body?.payload?.ticketId
    if (typeof ticketId !== 'string') return
    io.to(`ticket:${ticketId}`).emit('new-message', body.payload.data)
    return
  }

  if (body.event === 'ticket:updated') {
    const ticketId = body?.payload?.ticketId
    if (typeof ticketId !== 'string') return
    io.to(`ticket:${ticketId}`).emit('ticket-updated', body.payload.data)
    io.emit('ticket:list-updated', { ticketId, ...body.payload.data })
    return
  }
})

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[socket] listening on :${PORT}`)
})
