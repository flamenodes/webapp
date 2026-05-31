import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartGroupBySchema: z.ZodType<Prisma.CartGroupByArgs>;
export declare const CartGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CartOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.CartScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.CartScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        couponCode: "couponCode";
        updatedAt: "updatedAt";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.CartCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.CartMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.CartMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByCart.schema.d.ts.map