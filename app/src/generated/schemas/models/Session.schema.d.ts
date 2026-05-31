import * as z from 'zod';
export declare const SessionSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    ipAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userAgent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userId: z.ZodString;
    impersonatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type SessionType = z.infer<typeof SessionSchema>;
//# sourceMappingURL=Session.schema.d.ts.map