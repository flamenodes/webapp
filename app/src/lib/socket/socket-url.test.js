import { describe, expect, it } from 'vitest';
import { getSocketServerUrl } from './socket-url';
describe('getSocketServerUrl', () => {
    it('falls back to localhost when unset', () => {
        expect(getSocketServerUrl(undefined)).toBe('http://localhost:4000');
        expect(getSocketServerUrl({})).toBe('http://localhost:4000');
    });
    it('trims and uses VITE_SOCKET_SERVER_URL', () => {
        expect(getSocketServerUrl({ VITE_SOCKET_SERVER_URL: '  http://example.com  ' })).toBe('http://example.com');
    });
});
//# sourceMappingURL=socket-url.test.js.map