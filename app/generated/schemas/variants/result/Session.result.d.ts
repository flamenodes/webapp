import * as z from 'zod';
export declare const SessionResultSchema: z.ZodObject<{
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
export type SessionResultType = z.infer<typeof SessionResultSchema>;
//# sourceMappingURL=Session.result.d.ts.map