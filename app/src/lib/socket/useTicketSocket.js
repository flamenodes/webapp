import { useEffect, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { io } from 'socket.io-client';
const SOCKET_URL = typeof window !== 'undefined'
    ? (import.meta.env.VITE_SOCKET_SERVER_URL ?? 'http://localhost:4000')
    : 'http://localhost:4000';
const TYPING_THROTTLE_MS = 1500;
// Singleton socket — one connection shared across the app
let _socket = null;
let _refCount = 0;
function getSocket() {
    if (!_socket || _socket.disconnected) {
        _socket = io(SOCKET_URL, {
            withCredentials: true,
            autoConnect: true,
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionAttempts: Infinity,
        });
    }
    return _socket;
}
export function useTicketSocket(ticketId, userId) {
    const queryClient = useQueryClient();
    const queryClientRef = useRef(queryClient);
    queryClientRef.current = queryClient;
    const lastTypingSentRef = useRef(0);
    const joinedRef = useRef(null);
    useEffect(() => {
        if (!ticketId || !userId)
            return;
        const socket = getSocket();
        _refCount++;
        const onConnect = () => {
            socket.emit('join-ticket', { ticketId });
            joinedRef.current = ticketId;
        };
        const onJoined = ({ ticketId: tid }) => {
            if (tid === ticketId)
                joinedRef.current = ticketId;
        };
        const onNewMessage = (data) => {
            console.log('[socket] new-message received:', data);
            queryClientRef.current.invalidateQueries({ queryKey: ['ticket', ticketId] });
            queryClientRef.current.invalidateQueries({ queryKey: ['tickets'] });
        };
        const onTicketUpdated = () => {
            queryClientRef.current.invalidateQueries({ queryKey: ['ticket', ticketId] });
            queryClientRef.current.invalidateQueries({ queryKey: ['tickets'] });
        };
        const onTyping = ({ ticketId: tid, userId: uid }) => {
            if (tid !== ticketId)
                return;
            window.dispatchEvent(new CustomEvent('ticket:typing', { detail: { ticketId: tid, userId: uid } }));
        };
        const onStopTyping = ({ ticketId: tid, userId: uid }) => {
            if (tid !== ticketId)
                return;
            window.dispatchEvent(new CustomEvent('ticket:stop-typing', { detail: { ticketId: tid, userId: uid } }));
        };
        const onError = (err) => {
            console.error('[socket] error:', err.message);
        };
        socket.on('connect', onConnect);
        socket.on('joined-ticket', onJoined);
        socket.on('new-message', onNewMessage);
        socket.on('ticket-updated', onTicketUpdated);
        socket.on('typing', onTyping);
        socket.on('stop-typing', onStopTyping);
        socket.on('error', onError);
        // Join immediately if already connected
        if (socket.connected) {
            socket.emit('join-ticket', { ticketId });
            joinedRef.current = ticketId;
        }
        return () => {
            socket.off('connect', onConnect);
            socket.off('joined-ticket', onJoined);
            socket.off('new-message', onNewMessage);
            socket.off('ticket-updated', onTicketUpdated);
            socket.off('typing', onTyping);
            socket.off('stop-typing', onStopTyping);
            socket.off('error', onError);
            if (joinedRef.current) {
                socket.emit('leave-ticket', { ticketId: joinedRef.current });
                joinedRef.current = null;
            }
            _refCount--;
            if (_refCount <= 0) {
                _refCount = 0;
                // Don't disconnect — keep alive for fast re-navigation
            }
        };
    }, [ticketId, userId]);
    return {
        typing: () => {
            const now = Date.now();
            if (now - lastTypingSentRef.current < TYPING_THROTTLE_MS)
                return;
            lastTypingSentRef.current = now;
            _socket?.emit('typing', { ticketId });
        },
        stopTyping: () => {
            lastTypingSentRef.current = 0;
            _socket?.emit('stop-typing', { ticketId });
        },
    };
}
//# sourceMappingURL=useTicketSocket.js.map