import * as z from 'zod';
export declare const CouponSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodString;
    type: z.ZodDefault<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>>;
    amount: z.ZodNumber;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    active: z.ZodDefault<z.ZodBoolean>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxUses: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    usedCount: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type CouponType = z.infer<typeof CouponSchema>;
//# sourceMappingURL=Coupon.schema.d.ts.map