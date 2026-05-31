import * as z from 'zod';
export declare const SessionInputSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userId: z.ZodString;
    user: z.ZodAny;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
export type SessionInputType = z.infer<typeof SessionInputSchema>;
//# sourceMappingURL=Session.input.d.ts.map