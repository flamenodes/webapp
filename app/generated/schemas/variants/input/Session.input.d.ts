import * as z from 'zod';
export declare const SessionInputSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodDate;
    token: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userId: z.ZodString;
    user: z.ZodUnknown;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
export type SessionInputType = z.infer<typeof SessionInputSchema>;
//# sourceMappingURL=Session.input.d.ts.map