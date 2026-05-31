import * as z from 'zod';
export declare const ServerModelSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    orderItemId: z.ZodString;
    orderItem: z.ZodAny;
    name: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    ip: z.ZodNullable<z.ZodString>;
    port: z.ZodNullable<z.ZodNumber>;
    expiresAt: z.ZodNullable<z.ZodString>;
    resources: z.ZodNullable<z.ZodAny>;
    pterodactylData: z.ZodNullable<z.ZodAny>;
    suspended: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type ServerPureType = z.infer<typeof ServerModelSchema>;
//# sourceMappingURL=Server.pure.d.ts.map