import * as z from 'zod';
export declare const SessionModelSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodDate;
    token: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    ipAddress: z.ZodNullable<z.ZodString>;
    userAgent: z.ZodNullable<z.ZodString>;
    userId: z.ZodString;
    user: z.ZodUnknown;
    impersonatedBy: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type SessionPureType = z.infer<typeof SessionModelSchema>;
//# sourceMappingURL=Session.pure.d.ts.map