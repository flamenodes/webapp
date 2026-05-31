import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput>;
export declare const OrderOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    userId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    subtotalAmount: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    discountAmount: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    totalAmount: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    couponCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    deliveryMessage: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    deliveryData: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCountOrderByAggregateInput, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderAvgOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderAvgOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderMinOrderByAggregateInput, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderSumOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderSumOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderOrderByWithAggregationInput.schema.d.ts.map