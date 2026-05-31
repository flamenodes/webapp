import { z } from 'zod';
export declare const broadcastDev: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    text: z.ZodString;
}, z.core.$strip>, Promise<{
    ok: any;
    payload: {
        id: string;
        text: string;
        timestamp: string;
    };
}>>;
//# sourceMappingURL=socket.api.d.ts.map