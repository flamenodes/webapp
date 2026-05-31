import { getSocket } from './config'

export function joinTicket(ticketId: string) {
  getSocket().emit('join-ticket', { ticketId })
}

export function leaveTicket(ticketId: string) {
  getSocket().emit('leave-ticket', { ticketId })
}

export function sendTyping(ticketId: string) {
  getSocket().emit('typing', { ticketId })
}

export function sendStopTyping(ticketId: string) {
  getSocket().emit('stop-typing', { ticketId })
}

