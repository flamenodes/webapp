import * as z from 'zod';
export declare const CouponCreateSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodString;
    type: z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>;
    amount: z.ZodNumber;
    description: z.ZodNullable<z.ZodString>;
    active: z.ZodBoolean;
    expiresAt: z.ZodNullable<z.ZodString>;
    maxUses: z.ZodNullable<z.ZodNumber>;
    usedCount: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type CouponCreateType = z.infer<typeof CouponCreateSchema>;
//# sourceMappingURL=Coupon.create.d.ts.map