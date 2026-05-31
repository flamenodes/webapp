const SOCKET_SERVER_URL = process.env.SOCKET_SERVER_URL ?? 'http://localhost:4000';
async function notifySocketServer(body) {
    const secret = process.env.SOCKET_SERVER_SECRET;
    const headers = { 'content-type': 'application/json' };
    if (secret)
        headers['x-socket-secret'] = secret;
    const res = await fetch(`${SOCKET_SERVER_URL}/internal/emit`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    }).catch((err) => {
        console.error('[socket-context] failed to reach socket server:', err);
        return null;
    });
    if (!res?.ok) {
        console.error('[socket-context] socket server returned', res?.status);
        return { ok: false, reason: 'socket server unavailable' };
    }
    return { ok: true };
}
export const emitDevBroadcast = async (payload) => {
    const res = await notifySocketServer({ event: 'dev:broadcast', payload });
    return res.ok;
};
export const emitTicketMessage = async (ticketId, payload) => {
    const res = await notifySocketServer({
        event: 'ticket:new-message',
        payload: { ticketId, data: payload },
    });
    return res.ok;
};
export const emitTicketUpdated = async (ticketId, payload) => {
    const res = await notifySocketServer({
        event: 'ticket:updated',
        payload: { ticketId, data: payload },
    });
    return res.ok;
};
//# sourceMappingURL=socket-context.js.map