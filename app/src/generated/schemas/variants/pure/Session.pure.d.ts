import * as z from 'zod';
export declare const SessionModelSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    ipAddress: z.ZodNullable<z.ZodString>;
    userAgent: z.ZodNullable<z.ZodString>;
    userId: z.ZodString;
    user: z.ZodAny;
    impersonatedBy: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type SessionPureType = z.infer<typeof SessionModelSchema>;
//# sourceMappingURL=Session.pure.d.ts.map