export declare const getAdminServers: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const fetchPteroServerData: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    serverId: string;
}, Promise<{
    state: any;
    usage: {
        cpu: any;
        memory: any;
        disk: any;
        network_rx: any;
        network_tx: any;
    } | null;
    limits: any;
    name: any;
    description: any;
    identifier: any;
}>>;
export declare const pingAdminServer: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    serverId: string;
}, Promise<{
    online: boolean;
    ip: any;
    port: any;
}>>;
export declare const updateAdminServer: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    serverId: string;
    ip?: string | undefined;
    port?: number | undefined;
    resources?: {
        cpu?: number | undefined;
        memory?: number | undefined;
        swap?: number | undefined;
        disk?: number | undefined;
        databases?: number | undefined;
        backups?: number | undefined;
        allocations?: number | undefined;
    } | undefined;
    label?: string | undefined;
    status?: "PROCESSING" | "ACTIVE" | "SUSPENDED" | "TERMINATED" | undefined;
}, Promise<any>>;
//# sourceMappingURL=servers.api.d.ts.map