import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CouponAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CouponAvgOrderByAggregateInput>;
export declare const CouponAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=CouponAvgOrderByAggregateInput.schema.d.ts.map