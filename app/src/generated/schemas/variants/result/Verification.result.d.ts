import * as z from 'zod';
export declare const VerificationResultSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type VerificationResultType = z.infer<typeof VerificationResultSchema>;
//# sourceMappingURL=Verification.result.d.ts.map