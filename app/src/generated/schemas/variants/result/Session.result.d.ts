import * as z from 'zod';
export declare const SessionResultSchema: z.ZodObject<{
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
export type SessionResultType = z.infer<typeof SessionResultSchema>;
//# sourceMappingURL=Session.result.d.ts.map