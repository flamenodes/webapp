import * as z from 'zod';
export declare const CouponCreateResultSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodString;
    type: z.ZodUnknown;
    amount: z.ZodNumber;
    description: z.ZodOptional<z.ZodString>;
    active: z.ZodBoolean;
    expiresAt: z.ZodOptional<z.ZodDate>;
    maxUses: z.ZodOptional<z.ZodNumber>;
    usedCount: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=CouponCreateResult.schema.d.ts.map