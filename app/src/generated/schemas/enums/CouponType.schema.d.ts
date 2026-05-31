import * as z from 'zod';
export declare const CouponTypeSchema: z.ZodEnum<{
    FIXED: "FIXED";
    PERCENT: "PERCENT";
}>;
export type CouponType = z.infer<typeof CouponTypeSchema>;
//# sourceMappingURL=CouponType.schema.d.ts.map