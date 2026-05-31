import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const DiscountGroupBySchema: z.ZodType<Prisma.DiscountGroupByArgs>;
export declare const DiscountGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.DiscountOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.DiscountOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        label: "label";
        percentage: "percentage";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.DiscountCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.DiscountMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.DiscountMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.DiscountAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.DiscountSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByDiscount.schema.d.ts.map