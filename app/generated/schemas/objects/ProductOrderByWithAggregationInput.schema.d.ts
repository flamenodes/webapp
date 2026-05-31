import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput>;
export declare const ProductOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    planName: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    icon: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    badge: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    category: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    price: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    featureCategory: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    inStock: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    discountId: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    specs: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    deployMode: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCountOrderByAggregateInput, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductAvgOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductAvgOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductMinOrderByAggregateInput, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductSumOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductSumOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductOrderByWithAggregationInput.schema.d.ts.map