import * as z from 'zod';
export declare const VerificationSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type VerificationType = z.infer<typeof VerificationSchema>;
//# sourceMappingURL=Verification.schema.d.ts.map