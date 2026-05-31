import * as z from 'zod';
export declare const VerificationCreateSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type VerificationCreateType = z.infer<typeof VerificationCreateSchema>;
//# sourceMappingURL=Verification.create.d.ts.map