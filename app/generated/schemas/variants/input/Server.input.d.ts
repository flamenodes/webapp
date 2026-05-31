import * as z from 'zod';
export declare const ServerInputSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    orderItemId: z.ZodString;
    orderItem: z.ZodUnknown;
    name: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    ip: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    port: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    resources: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    pterodactylData: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    suspended: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type ServerInputType = z.infer<typeof ServerInputSchema>;
//# sourceMappingURL=Server.input.d.ts.map