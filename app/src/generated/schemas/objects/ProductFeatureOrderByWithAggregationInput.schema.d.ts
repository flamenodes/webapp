import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductFeatureOrderByWithAggregationInput>;
export declare const ProductFeatureOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    productId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    label: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCountOrderByAggregateInput, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureAvgOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureAvgOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureMinOrderByAggregateInput, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureSumOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSumOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureOrderByWithAggregationInput.schema.d.ts.map