import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductFeatureGroupBySchema: z.ZodType<Prisma.ProductFeatureGroupByArgs>;
export declare const ProductFeatureGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.ProductFeatureWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductFeatureOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.ProductFeatureScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        productId: "productId";
        label: "label";
        sortOrder: "sortOrder";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductFeatureCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ProductFeatureMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ProductFeatureMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ProductFeatureAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ProductFeatureSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByProductFeature.schema.d.ts.map