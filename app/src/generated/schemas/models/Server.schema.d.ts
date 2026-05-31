import * as z from 'zod';
export declare const ServerSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    orderItemId: z.ZodString;
    name: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    ip: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    port: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resources: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
    pterodactylData: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
    suspended: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type ServerType = z.infer<typeof ServerSchema>;
//# sourceMappingURL=Server.schema.d.ts.map