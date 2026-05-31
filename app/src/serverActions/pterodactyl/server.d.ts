import { z } from 'zod';
export declare const getAllPteroServers: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    page: z.ZodNumber;
    perPage: z.ZodNumber;
}, z.core.$strip>, Promise<any>>;
export declare const createPteroServer: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    name: z.ZodString;
    user: z.ZodNumber;
    egg: z.ZodNumber;
    nest: z.ZodNumber;
    specs: z.ZodObject<{
        cpu: z.ZodNumber;
        memory: z.ZodNumber;
        swap: z.ZodNumber;
        disk: z.ZodNumber;
        database: z.ZodNumber;
        allocation: z.ZodNumber;
        backups: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Server created successfully.";
    data: any;
} | {
    success: false;
    message: any;
    data?: undefined;
}>>;
//# sourceMappingURL=server.d.ts.map