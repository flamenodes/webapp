import * as z from 'zod';
export declare const SessionFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    ipAddress: z.ZodOptional<z.ZodString>;
    userAgent: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    user: z.ZodAny;
    impersonatedBy: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
//# sourceMappingURL=SessionFindFirstResult.schema.d.ts.map