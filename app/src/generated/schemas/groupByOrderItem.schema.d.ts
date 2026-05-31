import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderItemGroupBySchema: z.ZodType<Prisma.OrderItemGroupByArgs>;
export declare const OrderItemGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderItemOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.OrderItemScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        orderId: "orderId";
        createdAt: "createdAt";
        expiresAt: "expiresAt";
        productId: "productId";
        quantity: "quantity";
        billingPeriod: "billingPeriod";
        productName: "productName";
        unitPrice: "unitPrice";
        totalPrice: "totalPrice";
        specsSnapshot: "specsSnapshot";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.OrderItemCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.OrderItemMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.OrderItemMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.OrderItemAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.OrderItemSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByOrderItem.schema.d.ts.map