import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigAggregateSchema: z.ZodType<Prisma.ProductCategoryConfigAggregateArgs>;
export declare const ProductCategoryConfigAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductCategoryConfigOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductCategoryConfigOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductCategoryConfigCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateProductCategoryConfig.schema.d.ts.map