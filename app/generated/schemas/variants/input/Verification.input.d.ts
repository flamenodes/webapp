import * as z from 'zod';
export declare const VerificationInputSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodDate;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type VerificationInputType = z.infer<typeof VerificationInputSchema>;
//# sourceMappingURL=Verification.input.d.ts.map