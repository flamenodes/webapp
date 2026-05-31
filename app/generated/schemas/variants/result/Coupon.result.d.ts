import * as z from 'zod';
export declare const CouponResultSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodString;
    type: z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>;
    amount: z.ZodNumber;
    description: z.ZodNullable<z.ZodString>;
    active: z.ZodBoolean;
    expiresAt: z.ZodNullable<z.ZodDate>;
    maxUses: z.ZodNullable<z.ZodNumber>;
    usedCount: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type CouponResultType = z.infer<typeof CouponResultSchema>;
//# sourceMappingURL=Coupon.result.d.ts.map