import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigGroupBySchema: z.ZodType<Prisma.ProductCategoryConfigGroupByArgs>;
export declare const ProductCategoryConfigGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductCategoryConfigOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductCategoryConfigOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        category: "category";
        billingPeriods: "billingPeriods";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductCategoryConfigCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByProductCategoryConfig.schema.d.ts.map