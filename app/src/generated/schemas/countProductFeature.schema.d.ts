import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductFeatureCountSchema: z.ZodType<Prisma.ProductFeatureCountArgs>;
export declare const ProductFeatureCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductFeatureOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductFeatureWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductFeatureWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductFeatureCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countProductFeature.schema.d.ts.map