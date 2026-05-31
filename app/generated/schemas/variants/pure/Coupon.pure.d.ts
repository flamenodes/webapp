import * as z from 'zod';
export declare const CouponModelSchema: z.ZodObject<{
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
export type CouponPureType = z.infer<typeof CouponModelSchema>;
//# sourceMappingURL=Coupon.pure.d.ts.map