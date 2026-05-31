import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderFindFirstOrThrowSelectSchema: z.ZodType<Prisma.OrderSelect>;
export declare const OrderFindFirstOrThrowSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    userId: z.ZodOptional<z.ZodBoolean>;
    user: z.ZodOptional<z.ZodBoolean>;
    status: z.ZodOptional<z.ZodBoolean>;
    subtotalAmount: z.ZodOptional<z.ZodBoolean>;
    discountAmount: z.ZodOptional<z.ZodBoolean>;
    totalAmount: z.ZodOptional<z.ZodBoolean>;
    couponCode: z.ZodOptional<z.ZodBoolean>;
    deliveryMessage: z.ZodOptional<z.ZodBoolean>;
    deliveryData: z.ZodOptional<z.ZodBoolean>;
    items: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
    _count: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const OrderFindFirstOrThrowSchema: z.ZodType<Prisma.OrderFindFirstOrThrowArgs>;
export declare const OrderFindFirstOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.OrderOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
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
    }>, z.ZodArray<z.ZodEnum<{
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
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstOrThrowOrder.schema.d.ts.map