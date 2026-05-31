import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderItemAggregateSchema: z.ZodType<Prisma.OrderItemAggregateArgs>;
export declare const OrderItemAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.OrderItemCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.OrderItemMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.OrderItemMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.OrderItemAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.OrderItemSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateOrderItem.schema.d.ts.map