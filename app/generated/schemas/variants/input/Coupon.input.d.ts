import * as z from 'zod';
export declare const CouponInputSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodString;
    type: z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>;
    amount: z.ZodNumber;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    active: z.ZodBoolean;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    maxUses: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    usedCount: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type CouponInputType = z.infer<typeof CouponInputSchema>;
//# sourceMappingURL=Coupon.input.d.ts.map