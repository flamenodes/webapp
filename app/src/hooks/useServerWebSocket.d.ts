export interface ServerWebSocketStats {
    cpu_absolute: number;
    memory_bytes: number;
    memory_limit_bytes: number;
    disk_bytes: number;
    network_rx_bytes: number;
    network_tx_bytes: number;
    uptime: number;
    state: 'running' | 'starting' | 'stopping' | 'offline';
}
interface UseServerWebSocketOptions {
    serverId: string;
    enabled?: boolean;
    onStatusChange?: (status: string) => void;
    onStatsUpdate?: (stats: ServerWebSocketStats) => void;
    onError?: (error: string) => void;
}
export declare function useServerWebSocket(options: UseServerWebSocketOptions): {
    isConnected: boolean;
    status: string | null;
    stats: ServerWebSocketStats | null;
    reconnect: () => Promise<void>;
};
export {};
//# sourceMappingURL=useServerWebSocket.d.ts.map