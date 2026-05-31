import * as z from 'zod';
export declare const ServerInputSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    orderItemId: z.ZodString;
    orderItem: z.ZodAny;
    name: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    ip: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    port: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    resources: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
    pterodactylData: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
    suspended: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type ServerInputType = z.infer<typeof ServerInputSchema>;
//# sourceMappingURL=Server.input.d.ts.map