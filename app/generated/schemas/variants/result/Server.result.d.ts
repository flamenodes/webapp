import * as z from 'zod';
export declare const ServerResultSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    orderItemId: z.ZodString;
    orderItem: z.ZodUnknown;
    name: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    ip: z.ZodNullable<z.ZodString>;
    port: z.ZodNullable<z.ZodNumber>;
    expiresAt: z.ZodNullable<z.ZodDate>;
    resources: z.ZodNullable<z.ZodUnknown>;
    pterodactylData: z.ZodNullable<z.ZodUnknown>;
    suspended: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type ServerResultType = z.infer<typeof ServerResultSchema>;
//# sourceMappingURL=Server.result.d.ts.map