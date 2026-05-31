import { io } from 'socket.io-client';
const SOCKET_URL = import.meta.env.VITE_SOCKET_SERVER_URL?.trim() ??
    'http://localhost:4000';
let _socket = null;
export function getSocket() {
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
// Convenience singleton for direct use
export const socket = getSocket();
//# sourceMappingURL=config.js.map