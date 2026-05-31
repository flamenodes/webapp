import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CartItemOrderByWithAggregationInput>;
export declare const CartItemOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    cartId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    productId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    quantity: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    billingPeriod: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCountOrderByAggregateInput, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemAvgOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemAvgOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemMinOrderByAggregateInput, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemSumOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSumOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemOrderByWithAggregationInput.schema.d.ts.map