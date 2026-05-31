export declare const getUserServersWithDetails: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const pingServer: import("@tanstack/react-start").OptionalFetcher<undefined, (data: any) => {
    serverId: string;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const updateCustomServer: import("@tanstack/react-start").OptionalFetcher<undefined, (data: any) => {
    serverId: string;
    ip?: string | undefined;
    port?: number | undefined;
    label?: string | undefined;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const getWebSocketToken: import("@tanstack/react-start").OptionalFetcher<undefined, (data: any) => {
    serverId: string;
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const renewServer: import("@tanstack/react-start").OptionalFetcher<undefined, (data: any) => {
    serverId: string;
}, Promise<{
    success: boolean;
    message: string;
}>>;
//# sourceMappingURL=servers.api.d.ts.map