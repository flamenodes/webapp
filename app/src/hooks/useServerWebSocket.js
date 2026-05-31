import { useEffect, useRef, useState, useCallback } from 'react';
import { getWebSocketToken } from '@/serverActions/user/servers.api';
export function useServerWebSocket(options) {
    const { serverId, enabled = true, onStatusChange, onStatsUpdate, onError } = options;
    const [isConnected, setIsConnected] = useState(false);
    const [status, setStatus] = useState(null);
    const [stats, setStats] = useState(null);
    const socketRef = useRef(null);
    const tokenRef = useRef(null);
    const reconnectAttemptsRef = useRef(0);
    const maxReconnectAttemptsRef = useRef(5);
    const reconnectDelayRef = useRef(1000);
    const isConnectingRef = useRef(false);
    const handleClose = useCallback(() => {
        setIsConnected(false);
    }, []);
    const connect = useCallback(async () => {
        if (!enabled || isConnectingRef.current)
            return;
        isConnectingRef.current = true;
        try {
            const tokenRes = await getWebSocketToken({ data: { serverId } });
            if (!tokenRes.success || !tokenRes.data) {
                onError?.(tokenRes.message || 'Failed to get WebSocket token');
                isConnectingRef.current = false;
                scheduleReconnect();
                return;
            }
            const { token, socket: socketUrl } = tokenRes.data;
            tokenRef.current = token;
            const ws = new WebSocket(socketUrl);
            ws.onopen = () => {
                console.log('Server WebSocket connected');
                setIsConnected(true);
                reconnectAttemptsRef.current = 0;
                // Authenticate
                ws.send(JSON.stringify({
                    event: 'auth',
                    args: [token],
                }));
            };
            ws.onmessage = (event) => {
                try {
                    const message = JSON.parse(event.data);
                    switch (message.event) {
                        case 'status':
                            setStatus(message.args[0]);
                            onStatusChange?.(message.args[0]);
                            break;
                        case 'stats':
                            try {
                                const statsData = JSON.parse(message.args[0]);
                                setStats(statsData);
                                onStatsUpdate?.(statsData);
                            }
                            catch {
                                console.error('Failed to parse stats');
                            }
                            break;
                        case 'jwt error':
                            console.error('JWT Error:', message.args[0]);
                            onError?.(message.args[0]);
                            ws.close();
                            scheduleReconnect();
                            break;
                    }
                }
                catch (error) {
                    console.error('Failed to parse WebSocket message:', error);
                }
            };
            ws.onclose = (event) => {
                console.log('Server WebSocket closed:', event.code);
                handleClose();
                if (event.code !== 1000 && reconnectAttemptsRef.current < maxReconnectAttemptsRef.current) {
                    scheduleReconnect();
                }
            };
            ws.onerror = (error) => {
                console.error('Server WebSocket error:', error);
                onError?.('WebSocket connection error');
            };
            socketRef.current = ws;
        }
        catch (error) {
            console.error('Failed to connect WebSocket:', error);
            onError?.(error instanceof Error ? error.message : 'Connection failed');
            scheduleReconnect();
        }
        finally {
            isConnectingRef.current = false;
        }
    }, [serverId, enabled, onStatusChange, onStatsUpdate, onError, handleClose]);
    const scheduleReconnect = useCallback(() => {
        if (reconnectAttemptsRef.current >= maxReconnectAttemptsRef.current) {
            console.error('Max reconnection attempts reached');
            return;
        }
        const delay = reconnectDelayRef.current * Math.pow(2, reconnectAttemptsRef.current);
        reconnectAttemptsRef.current++;
        setTimeout(() => {
            console.log(`Attempting to reconnect (${reconnectAttemptsRef.current}/${maxReconnectAttemptsRef.current})`);
            connect();
        }, delay);
    }, [connect]);
    const disconnect = useCallback(() => {
        if (socketRef.current) {
            socketRef.current.close(1000, 'Manual disconnect');
            socketRef.current = null;
        }
        setIsConnected(false);
    }, []);
    useEffect(() => {
        if (enabled) {
            connect();
        }
        return () => {
            disconnect();
        };
    }, [enabled, connect, disconnect]);
    return {
        isConnected,
        status,
        stats,
        reconnect: connect,
    };
}
//# sourceMappingURL=useServerWebSocket.js.map