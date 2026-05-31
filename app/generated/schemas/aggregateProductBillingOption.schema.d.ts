import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionAggregateSchema: z.ZodType<Prisma.ProductBillingOptionAggregateArgs>;
export declare const ProductBillingOptionAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductBillingOptionCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateProductBillingOption.schema.d.ts.map