import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const DiscountAggregateSchema: z.ZodType<Prisma.DiscountAggregateArgs>;
export declare const DiscountAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.DiscountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.DiscountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.DiscountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.DiscountCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.DiscountMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.DiscountMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.DiscountAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.DiscountSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateDiscount.schema.d.ts.map