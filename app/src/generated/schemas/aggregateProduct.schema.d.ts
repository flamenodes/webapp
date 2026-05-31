import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductAggregateSchema: z.ZodType<Prisma.ProductAggregateArgs>;
export declare const ProductAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ProductMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ProductMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ProductAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ProductSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateProduct.schema.d.ts.map