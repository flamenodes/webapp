import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CouponSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CouponSumOrderByAggregateInput>;
export declare const CouponSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    amount: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    maxUses: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    usedCount: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=CouponSumOrderByAggregateInput.schema.d.ts.map