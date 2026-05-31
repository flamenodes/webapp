import * as z from 'zod';
export declare const SessionCreateSchema: z.ZodObject<{
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
export type SessionCreateType = z.infer<typeof SessionCreateSchema>;
//# sourceMappingURL=Session.create.d.ts.map