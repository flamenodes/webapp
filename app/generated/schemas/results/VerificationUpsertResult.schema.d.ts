import * as z from 'zod';
export declare const VerificationUpsertResultSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodDate;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=VerificationUpsertResult.schema.d.ts.map