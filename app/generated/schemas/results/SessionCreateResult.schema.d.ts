import * as z from 'zod';
export declare const SessionCreateResultSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodDate;
    token: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    ipAddress: z.ZodOptional<z.ZodString>;
    userAgent: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    user: z.ZodUnknown;
    impersonatedBy: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=SessionCreateResult.schema.d.ts.map