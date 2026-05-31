import { z } from 'zod';
export declare const createServer: any;
export declare const getServers: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const getServer: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<any>>;
export declare const updateServer: any;
export declare const deleteServer: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<any>>;
//# sourceMappingURL=server.api.d.ts.map