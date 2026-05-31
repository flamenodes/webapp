import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigOrderByWithAggregationInput>;
export declare const ProductCategoryConfigOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    category: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    billingPeriods: z.ZodOptional<z.ZodEnum<{
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
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCountOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigMinOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigOrderByWithAggregationInput.schema.d.ts.map