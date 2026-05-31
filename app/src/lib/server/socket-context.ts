export type DevBroadcastPayload = {
  id: string
  text: string
  from?: string
  timestamp: string
}

export type TicketSocketMessageEvent = {
  type: 'new-message'
  message: unknown
}

export type TicketSocketTicketEvent = {
  type: 'ticket-created' | 'ticket-updated'
  ticket: unknown
}

type SocketServerEvent =
  | { event: 'dev:broadcast'; payload: DevBroadcastPayload }
  | {
      event: 'ticket:new-message'
      payload: { ticketId: string; data: TicketSocketMessageEvent }
    }
  | {
      event: 'ticket:updated'
      payload: { ticketId: string; data: TicketSocketTicketEvent }
    }

const SOCKET_SERVER_URL = process.env.SOCKET_SERVER_URL ?? 'http://localhost:4000'

async function notifySocketServer(body: SocketServerEvent) {
  const secret = process.env.SOCKET_SERVER_SECRET
  const headers: Record<string, string> = { 'content-type': 'application/json' }
  if (secret) headers['x-socket-secret'] = secret

  const res = await fetch(`${SOCKET_SERVER_URL}/internal/emit`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  }).catch((err) => {
    console.error('[socket-context] failed to reach socket server:', err)
    return null
  })

  if (!res?.ok) {
    console.error('[socket-context] socket server returned', res?.status)
    return { ok: false as const, reason: 'socket server unavailable' }
  }
  return { ok: true as const }
}

export const emitDevBroadcast = async (payload: DevBroadcastPayload) => {
  const res = await notifySocketServer({ event: 'dev:broadcast', payload })
  return res.ok
}

export const emitTicketMessage = async (
  ticketId: string,
  payload: TicketSocketMessageEvent,
) => {
  const res = await notifySocketServer({
    event: 'ticket:new-message',
    payload: { ticketId, data: payload },
  })
  return res.ok
}

export const emitTicketUpdated = async (
  ticketId: string,
  payload: TicketSocketTicketEvent,
) => {
  const res = await notifySocketServer({
    event: 'ticket:updated',
    payload: { ticketId, data: payload },
  })
  return res.ok
}

