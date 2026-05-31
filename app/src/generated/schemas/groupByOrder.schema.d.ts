import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderGroupBySchema: z.ZodType<Prisma.OrderGroupByArgs>;
export declare const OrderGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.OrderOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.OrderScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        status: "status";
        subtotalAmount: "subtotalAmount";
        discountAmount: "discountAmount";
        totalAmount: "totalAmount";
        couponCode: "couponCode";
        deliveryMessage: "deliveryMessage";
        deliveryData: "deliveryData";
        updatedAt: "updatedAt";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.OrderCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.OrderMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.OrderMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.OrderAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.OrderSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.OrderSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByOrder.schema.d.ts.map