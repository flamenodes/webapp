import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductFeatureAggregateSchema: z.ZodType<Prisma.ProductFeatureAggregateArgs>;
export declare const ProductFeatureAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductFeatureOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductFeatureWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductFeatureWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductFeatureCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ProductFeatureMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ProductFeatureMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ProductFeatureAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ProductFeatureSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateProductFeature.schema.d.ts.map