import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const PORT = Number(process.env.PORT ?? 4000)
const SOCKET_SERVER_SECRET = process.env.SOCKET_SERVER_SECRET ?? ''

const app = express()
app.use(express.json())

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL ?? 'http://localhost:3000',
    credentials: true,
  },
})

// Internal HTTP endpoint — called by the app server to broadcast events
app.post('/internal/emit', (req, res) => {
  const secret = req.headers['x-socket-secret']
  // Only enforce secret check if one is configured
  if (SOCKET_SERVER_SECRET && secret !== SOCKET_SERVER_SECRET) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  const { event, payload } = req.body as {
    event: string
    payload: { ticketId?: string; data?: unknown } & Record<string, unknown>
  }

  if (!event) {
    res.status(400).json({ error: 'Missing event' })
    return
  }

  if (event === 'ticket:new-message' && payload?.ticketId) {
    io.to(`ticket:${payload.ticketId}`).emit('new-message', payload.data)
  } else if (event === 'ticket:updated' && payload?.ticketId) {
    io.to(`ticket:${payload.ticketId}`).emit('ticket-updated', payload.data)
  } else if (event === 'dev:broadcast') {
    io.emit('dev:broadcast', payload)
  } else {
    io.emit(event, payload)
  }

  res.json({ ok: true })
})

io.on('connection', (socket) => {
  console.log(`[socket] connected: ${socket.id}`)

  socket.on('join-ticket', ({ ticketId }: { ticketId: string }) => {
    if (!ticketId) return
    socket.join(`ticket:${ticketId}`)
    socket.emit('joined-ticket', { ticketId })
    console.log(`[socket] ${socket.id} joined ticket:${ticketId}`)
  })

  socket.on('leave-ticket', ({ ticketId }: { ticketId: string }) => {
    if (!ticketId) return
    socket.leave(`ticket:${ticketId}`)
    console.log(`[socket] ${socket.id} left ticket:${ticketId}`)
  })

  socket.on('typing', ({ ticketId, userId }: { ticketId: string; userId?: string }) => {
    if (!ticketId) return
    socket.to(`ticket:${ticketId}`).emit('typing', { ticketId, userId: userId ?? socket.id })
  })

  socket.on('stop-typing', ({ ticketId, userId }: { ticketId: string; userId?: string }) => {
    if (!ticketId) return
    socket.to(`ticket:${ticketId}`).emit('stop-typing', { ticketId, userId: userId ?? socket.id })
  })

  socket.on('disconnect', (reason) => {
    console.log(`[socket] disconnected: ${socket.id} (${reason})`)
  })
})

server.listen(PORT, () => {
  console.log(`[server] running at http://localhost:${PORT}`)
})
