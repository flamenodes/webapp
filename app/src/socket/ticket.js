import { getSocket } from './config';
export function joinTicket(ticketId) {
    getSocket().emit('join-ticket', { ticketId });
}
export function leaveTicket(ticketId) {
    getSocket().emit('leave-ticket', { ticketId });
}
export function sendTyping(ticketId) {
    getSocket().emit('typing', { ticketId });
}
export function sendStopTyping(ticketId) {
    getSocket().emit('stop-typing', { ticketId });
}
//# sourceMappingURL=ticket.js.map