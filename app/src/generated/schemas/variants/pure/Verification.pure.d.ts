import * as z from 'zod';
export declare const VerificationModelSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type VerificationPureType = z.infer<typeof VerificationModelSchema>;
//# sourceMappingURL=Verification.pure.d.ts.map