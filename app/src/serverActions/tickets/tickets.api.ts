import { prisma } from '#/db'
import { auth } from '#/lib/auth'
import { emitTicketMessage, emitTicketUpdated } from '#/lib/server/socket-context'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { z } from 'zod'
import { Prisma } from '#/generated/prisma/client'

const STAFF_ROLES = new Set(['support', 'manager', 'admin', 'owner'])

function requireSession(session: Awaited<ReturnType<typeof auth.api.getSession>>) {
  if (!session?.user?.id) throw new Error('Unauthorized')
  return session
}

function isStaff(session: { user?: { role?: string | null } } | null) {
  const role = session?.user?.role ?? null
  return typeof role === 'string' && STAFF_ROLES.has(role)
}

function getSenderRole(session: { user?: { role?: string | null } }) {
  const role = session.user?.role ?? null
  if (typeof role === 'string' && (role === 'admin' || role === 'owner')) return 'ADMIN' as const
  if (typeof role === 'string' && STAFF_ROLES.has(role)) return 'SUPPORT' as const
  return 'USER' as const
}

function formatTicketId(seq: number) {
  return `TICK-${String(seq).padStart(4, '0')}`
}

function rethrowHelpful(err: unknown) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2021' || err.code === 'P2022') {
      throw new Error('Tickets tables not found. Run `pnpm db:push` (or migrate) then refresh.')
    }
  }
  throw err instanceof Error ? err : new Error('Request failed')
}

const ticketPrioritySchema = z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT'])
const ticketStatusSchema = z.enum(['OPEN', 'PENDING', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'])

const createTicketSchema = z.object({
  title: z.string().trim().min(3).max(120),
  description: z.string().trim().min(1).max(10_000),
  priority: ticketPrioritySchema.default('MEDIUM'),
  channelName: z.string().trim().min(2).max(60),
  tags: z.array(z.string().trim().min(1).max(32)).max(10).default([]),
})

export const createTicket = createServerFn({ method: 'POST' })
  .inputValidator((data) => createTicketSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))

    try {
      const cleanedTags = Array.from(
        new Set(data.tags.map((t) => t.trim()).filter(Boolean)),
      ).slice(0, 10)

      const ticket = await prisma.$transaction(async (tx) => {
        const counter = await tx.ticketCounter.upsert({
          where: { id: 'ticket' },
          create: { id: 'ticket', seq: 1 },
          update: { seq: { increment: 1 } },
          select: { seq: true },
        })

        const ticketId = formatTicketId(counter.seq)

        return tx.ticket.create({
          data: {
            ticketId,
            title: data.title,
            description: data.description,
            priority: data.priority,
            status: 'OPEN',
            channelName: data.channelName,
            tags: cleanedTags,
            userId: session.user.id,
          },
          include: {
            user: { select: { id: true, name: true, email: true, role: true, image: true } },
            assignedTo: { select: { id: true, name: true, email: true, role: true, image: true } },
          },
        })
      })

      await emitTicketUpdated(ticket.ticketId, { type: 'ticket-created', ticket })

      return { success: true, ticket }
    } catch (err) {
      rethrowHelpful(err)
    }
  })

const listTicketsSchema = z.object({
  status: ticketStatusSchema.optional(),
  priority: ticketPrioritySchema.optional(),
  channelName: z.string().trim().min(1).max(60).optional(),
  tags: z.array(z.string().trim().min(1).max(32)).max(10).optional(),
  search: z.string().trim().min(1).max(120).optional(),
  onlyAssignedToMe: z.boolean().optional(),
  take: z.number().int().min(1).max(100).default(50),
  skip: z.number().int().min(0).max(10_000).default(0),
})

export const listTickets = createServerFn({ method: 'POST' })
  .inputValidator((data) => listTicketsSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))

    const staff = isStaff(session)

    const where = {
      ...(staff ? {} : { userId: session.user.id }),
      ...(data.status ? { status: data.status } : {}),
      ...(data.priority ? { priority: data.priority } : {}),
      ...(data.channelName ? { channelName: data.channelName } : {}),
      ...(data.onlyAssignedToMe ? { assignedToId: session.user.id } : {}),
      ...(data.tags?.length ? { tags: { hasEvery: data.tags } } : {}),
      ...(data.search
        ? {
            OR: [
              { ticketId: { contains: data.search, mode: 'insensitive' as const } },
              { title: { contains: data.search, mode: 'insensitive' as const } },
            ],
          }
        : {}),
    } as const

    try {
      const tickets = await prisma.ticket.findMany({
        where,
        orderBy: { updatedAt: 'desc' },
        take: data.take,
        skip: data.skip,
        include: {
          user: { select: { id: true, name: true, email: true, role: true, image: true } },
          assignedTo: { select: { id: true, name: true, email: true, role: true, image: true } },
          messages: { orderBy: { createdAt: 'desc' }, take: 1 },
        },
      })

      return { success: true, tickets }
    } catch (err) {
      rethrowHelpful(err)
    }
  })

const getTicketSchema = z.object({
  ticketId: z.string().trim().min(1).max(32),
})

export const getTicket = createServerFn({ method: 'POST' })
  .inputValidator((data) => getTicketSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))

    try {
      const ticket = await prisma.ticket.findUnique({
        where: { ticketId: data.ticketId },
        include: {
          user: { select: { id: true, name: true, email: true, role: true, image: true } },
          assignedTo: { select: { id: true, name: true, email: true, role: true, image: true } },
          messages: {
            orderBy: { createdAt: 'asc' },
            take: 200,
            select: {
              id: true,
              content: true,
              senderRole: true,
              senderId: true,
              createdAt: true,
              attachments: true,
            },
          },
        },
      })

      if (!ticket) throw new Error('Ticket not found')

      const staff = isStaff(session)
      if (!staff && ticket.userId !== session.user.id) throw new Error('Forbidden')

      return { success: true, ticket }
    } catch (err) {
      rethrowHelpful(err)
    }
  })

const sendMessageSchema = z.object({
  ticketId: z.string().trim().min(1).max(32),
  content: z.string().trim().min(1).max(10_000),
  attachments: z.unknown().optional(),
})

export const sendTicketMessage = createServerFn({ method: 'POST' })
  .inputValidator((data) => sendMessageSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))

    try {
      const ticket = await prisma.ticket.findUnique({
        where: { ticketId: data.ticketId },
        select: { id: true, ticketId: true, userId: true },
      })
      if (!ticket) throw new Error('Ticket not found')

      const staff = isStaff(session)
      if (!staff && ticket.userId !== session.user.id) throw new Error('Forbidden')

      const message = await prisma.ticketMessage.create({
        data: {
          ticketId: ticket.id,
          senderId: session.user.id,
          senderRole: getSenderRole(session),
          content: data.content,
          attachments: data.attachments ?? undefined,
        },
      })

      await emitTicketMessage(ticket.ticketId, { type: 'new-message', message })

      return { success: true, message }
    } catch (err) {
      rethrowHelpful(err)
    }
  })

const updateTicketSchema = z.object({
  ticketId: z.string().trim().min(1).max(32),
  status: ticketStatusSchema.optional(),
  priority: ticketPrioritySchema.optional(),
  channelName: z.string().trim().min(2).max(60).optional(),
  tags: z.array(z.string().trim().min(1).max(32)).max(10).optional(),
  assignedToId: z.string().trim().min(1).optional().nullable(),
})

export const updateTicket = createServerFn({ method: 'POST' })
  .inputValidator((data) => updateTicketSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))

    if (!isStaff(session)) throw new Error('Forbidden')

    try {
      const cleanedTags = data.tags
        ? Array.from(new Set(data.tags.map((t) => t.trim()).filter(Boolean))).slice(0, 10)
        : undefined

      const patch: Record<string, unknown> = {}
      if (data.status) patch.status = data.status
      if (data.priority) patch.priority = data.priority
      if (data.channelName) patch.channelName = data.channelName
      if (cleanedTags) patch.tags = cleanedTags
      if (data.assignedToId !== undefined) patch.assignedToId = data.assignedToId

      if (data.status === 'CLOSED') patch.closedAt = new Date()
      if (data.status && data.status !== 'CLOSED') patch.closedAt = null

      const ticket = await prisma.ticket.update({
        where: { ticketId: data.ticketId },
        data: patch,
        include: {
          user: { select: { id: true, name: true, email: true, role: true, image: true } },
          assignedTo: { select: { id: true, name: true, email: true, role: true, image: true } },
        },
      })

      await emitTicketUpdated(ticket.ticketId, { type: 'ticket-created', ticket })

      return { success: true, ticket }
    } catch (err) {
      rethrowHelpful(err)
    }
  })

export const listSupportAgents = createServerFn({ method: 'GET' }).handler(
  async () => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))
    if (!isStaff(session)) throw new Error('Forbidden')

    const users = await prisma.user.findMany({
      where: {
        role: { in: Array.from(STAFF_ROLES) },
      },
      orderBy: { name: 'asc' },
      select: { id: true, name: true, email: true, role: true },
      take: 200,
    })

    return { success: true, users }
  },
)

const listTagPresetsSchema = z.object({
  search: z.string().trim().min(1).max(32).optional(),
  take: z.number().int().min(1).max(100).default(50),
})

export const listTicketTagPresets = createServerFn({ method: 'POST' })
  .inputValidator((data) => listTagPresetsSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    requireSession(await auth.api.getSession({ headers }))

    const where = data.search
      ? { name: { contains: data.search, mode: 'insensitive' as const } }
      : {}

    try {
      const tags = await (prisma as any).ticketTagPreset.findMany({
        where,
        orderBy: { name: 'asc' },
        take: data.take,
        select: { id: true, name: true },
      })
      return { success: true, tags }
    } catch (err) {
      rethrowHelpful(err)
    }
  })

const upsertTagPresetSchema = z.object({
  name: z.string().trim().min(1).max(32),
})

export const upsertTicketTagPreset = createServerFn({ method: 'POST' })
  .inputValidator((data) => upsertTagPresetSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))
    if (!isStaff(session)) throw new Error('Forbidden')

    try {
      const tag = await (prisma as any).ticketTagPreset.upsert({
        where: { name: data.name },
        create: { name: data.name },
        update: {},
        select: { id: true, name: true },
      })
      return { success: true, tag }
    } catch (err) {
      rethrowHelpful(err)
    }
  })

const deleteTagPresetSchema = z.object({
  id: z.string().trim().min(1).max(64),
})

export const deleteTicketTagPreset = createServerFn({ method: 'POST' })
  .inputValidator((data) => deleteTagPresetSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))
    if (!isStaff(session)) throw new Error('Forbidden')

    try {
      await (prisma as any).ticketTagPreset.delete({ where: { id: data.id } })
      return { success: true }
    } catch (err) {
      rethrowHelpful(err)
    }
  })

const deleteTicketSchema = z.object({
  ticketId: z.string().trim().min(1).max(32),
})

/** Owner can delete a CLOSED ticket directly. Admin can request deletion (adds a system message). */
export const deleteTicket = createServerFn({ method: 'POST' })
  .inputValidator((data) => deleteTicketSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))

    const role = session.user?.role ?? ''
    const isOwner = role === 'owner'
    const isAdmin = role === 'admin'

    if (!isOwner && !isAdmin) throw new Error('Forbidden')

    try {
      const ticket = await prisma.ticket.findUnique({
        where: { ticketId: data.ticketId },
        select: { id: true, ticketId: true, status: true },
      })
      if (!ticket) throw new Error('Ticket not found')
      if (ticket.status !== 'CLOSED') throw new Error('Only CLOSED tickets can be deleted')

      if (isOwner) {
        await prisma.ticket.delete({ where: { ticketId: data.ticketId } })
        return { success: true, deleted: true }
      }

      // Admin: send a system message requesting deletion; owner must approve
      await prisma.ticketMessage.create({
        data: {
          ticketId: ticket.id,
          senderId: session.user.id,
          senderRole: 'ADMIN',
          content: `⚠️ **Deletion Requested** — This ticket has been flagged for deletion by an admin. An owner must approve to permanently delete it.`,
          attachments: undefined,
        },
      })
      await emitTicketMessage(ticket.ticketId, { type: 'deletion-requested', ticketId: ticket.ticketId })

      return { success: true, deleted: false, requested: true }
    } catch (err) {
      rethrowHelpful(err)
    }
  })

const getUserProfileSchema = z.object({
  userId: z.string().min(1),
})

export const getUserProfile = createServerFn({ method: 'POST' })
  .inputValidator((data) => getUserProfileSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = requireSession(await auth.api.getSession({ headers }))
    if (!isStaff(session)) throw new Error('Forbidden')

    try {
      const user = await prisma.user.findUnique({
        where: { id: data.userId },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          username: true,
          firstname: true,
          lastname: true,
          role: true,
          banned: true,
          banReason: true,
          banExpires: true,
          createdAt: true,
          updatedAt: true,
        },
      })

      if (!user) throw new Error('User not found')
      return { success: true, user }
    } catch (err) {
      rethrowHelpful(err)
    }
  })
