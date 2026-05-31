import * as z from 'zod';
export declare const SessionUpdateResultSchema: z.ZodNullable<z.ZodObject<{
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
}, z.core.$strip>>;
//# sourceMappingURL=SessionUpdateResult.schema.d.ts.map