import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartItemGroupBySchema: z.ZodType<Prisma.CartItemGroupByArgs>;
export declare const CartItemGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CartItemOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartItemOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.CartItemScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        productId: "productId";
        cartId: "cartId";
        quantity: "quantity";
        billingPeriod: "billingPeriod";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.CartItemCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.CartItemMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.CartItemMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.CartItemAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.CartItemSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByCartItem.schema.d.ts.map