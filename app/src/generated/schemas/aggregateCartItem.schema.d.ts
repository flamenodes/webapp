import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartItemAggregateSchema: z.ZodType<Prisma.CartItemAggregateArgs>;
export declare const CartItemAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CartItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.CartItemCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.CartItemMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.CartItemMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.CartItemAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.CartItemSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateCartItem.schema.d.ts.map