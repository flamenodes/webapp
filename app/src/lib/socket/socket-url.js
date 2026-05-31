const DEFAULT_SOCKET_SERVER_URL = 'http://localhost:4000';
export function getSocketServerUrl(env = import.meta.env) {
    const url = env?.VITE_SOCKET_SERVER_URL;
    const trimmed = typeof url === 'string' ? url.trim() : '';
    return trimmed || DEFAULT_SOCKET_SERVER_URL;
}
//# sourceMappingURL=socket-url.js.map