export declare const getStatusNodes: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const addStatusNode: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    name: string;
    ip: string;
    location: string;
    type: string;
    port: number;
    protocol: "http" | "https" | "tcp";
    cpu?: number | null | undefined;
    memory?: number | null | undefined;
    disk?: number | null | undefined;
}, Promise<any>>;
export declare const deleteStatusNode: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    id: string;
}, Promise<{
    success: true;
}>>;
export declare const getPublicStatusNodes: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const pingAllNodes: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const pingOneNode: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    id: string;
}, Promise<any>>;
//# sourceMappingURL=status.api.d.ts.map