import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderAggregateSchema: z.ZodType<Prisma.OrderAggregateArgs>;
export declare const OrderAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.OrderOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.OrderCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.OrderMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.OrderMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.OrderAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.OrderSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateOrder.schema.d.ts.map