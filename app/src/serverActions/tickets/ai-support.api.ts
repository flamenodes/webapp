import { prisma } from '#/db'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { getSession } from '#/handlers/auth.handler'
import { emitTicketMessage } from '#/lib/server/socket-context'

const STAFF_ROLES = ['support', 'manager', 'admin', 'owner']

const AI_BOT_ID = 'ai-support-bot'
const CANNOT_RESOLVE_PHRASES = [
  "i don't know", "i'm not sure", "i cannot", "i can't", "unable to",
  "please contact", "reach out to", "human support", "escalat",
]

function needsEscalation(reply: string) {
  const lower = reply.toLowerCase()
  return CANNOT_RESOLVE_PHRASES.some((p) => lower.includes(p))
}

async function getAiConfig() {
  return prisma.aiSupportConfig.findFirst()
}

async function pickSupportAgent(): Promise<string | null> {
  // Pick the staff member with fewest open assigned tickets
  const agents = await prisma.user.findMany({
    where: { role: { in: STAFF_ROLES } },
    select: {
      id: true,
      _count: { select: { assignedTickets: { where: { status: { in: ['OPEN', 'PENDING', 'IN_PROGRESS'] } } } } },
    },
  })
  if (!agents.length) return null
  agents.sort((a, b) => a._count.assignedTickets - b._count.assignedTickets)
  return agents[0].id
}

export const sendAiReply = createServerFn({ method: 'POST' })
  .validator(z.object({ ticketId: z.string() }))
  .handler(async ({ data }) => {
    const config = await getAiConfig()
    if (!config?.enabled) return { skipped: true }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) return { skipped: true }

    const ticket = await prisma.ticket.findUnique({
      where: { ticketId: data.ticketId },
      include: {
        messages: { orderBy: { createdAt: 'asc' }, take: 20 },
        user: { select: { name: true } },
      },
    })
    if (!ticket) return { skipped: true }

    // Build message history for OpenAI
    const history = ticket.messages.map((m) => ({
      role: m.senderRole === 'USER' ? 'user' : 'assistant',
      content: m.content,
    })) as { role: 'user' | 'assistant' | 'system'; content: string }[]

    const systemPrompt = config.systemPrompt ||
      'You are a helpful support agent for Flame Nodes, a hosting provider. Answer customer questions concisely. If you cannot resolve the issue, say so clearly so a human agent can be assigned.'

    const { default: OpenAI } = await import('openai')
    const openai = new OpenAI({ apiKey })

    const completion = await openai.chat.completions.create({
      model: config.model || 'gpt-4o-mini',
      messages: [{ role: 'system', content: systemPrompt }, ...history],
      max_tokens: 500,
    })

    const reply = completion.choices[0]?.message?.content?.trim()
    if (!reply) return { skipped: true }

    // Save AI message as SUPPORT role
    const aiMessage = await prisma.ticketMessage.create({
      data: {
        ticketId: ticket.id,
        senderId: ticket.userId, // fallback — AI has no real user
        senderRole: 'SUPPORT',
        content: `🤖 **AI Support:** ${reply}`,
      },
    })

    await emitTicketMessage(ticket.ticketId, { type: 'new-message', message: aiMessage })

    // Escalate if AI can't resolve
    if (needsEscalation(reply) && !ticket.assignedToId) {
      const agentId = await pickSupportAgent()
      if (agentId) {
        await prisma.ticket.update({
          where: { id: ticket.id },
          data: { assignedToId: agentId, status: 'IN_PROGRESS' },
        })

        const agent = await prisma.user.findUnique({ where: { id: agentId }, select: { name: true } })
        const escalateMsg = await prisma.ticketMessage.create({
          data: {
            ticketId: ticket.id,
            senderId: ticket.userId,
            senderRole: 'SUPPORT',
            content: `🔔 **Escalated to ${agent?.name ?? 'a support agent'}** — A human agent has been assigned and will assist you shortly.`,
          },
        })
        await emitTicketMessage(ticket.ticketId, { type: 'new-message', message: escalateMsg })
      }
    }

    return { success: true, reply }
  })

export const getAiSupportConfig = createServerFn({ method: 'GET' }).handler(async () => {
  const session = await getSession()
  if (!session?.user) throw new Error('Unauthorized')
  return prisma.aiSupportConfig.findFirst()
})

export const updateAiSupportConfig = createServerFn({ method: 'POST' })
  .validator(z.object({
    enabled: z.boolean().optional(),
    systemPrompt: z.string().optional(),
    model: z.string().optional(),
  }))
  .handler(async ({ data }) => {
    const session = await getSession()
    if (!session?.user) throw new Error('Unauthorized')

    const existing = await prisma.aiSupportConfig.findFirst()
    if (existing) {
      return prisma.aiSupportConfig.update({ where: { id: existing.id }, data })
    }
    return prisma.aiSupportConfig.create({ data: { ...data, enabled: data.enabled ?? true } })
  })
