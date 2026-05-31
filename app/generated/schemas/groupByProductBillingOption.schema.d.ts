import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionGroupBySchema: z.ZodType<Prisma.ProductBillingOptionGroupByArgs>;
export declare const ProductBillingOptionGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductBillingOptionOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        productId: "productId";
        billingPeriod: "billingPeriod";
        price: "price";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductBillingOptionCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByProductBillingOption.schema.d.ts.map