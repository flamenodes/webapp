import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DiscountOrderByWithAggregationInput>;
export declare const DiscountOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    label: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    percentage: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCountOrderByAggregateInput, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountAvgOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountAvgOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountMinOrderByAggregateInput, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountSumOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSumOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountOrderByWithAggregationInput.schema.d.ts.map