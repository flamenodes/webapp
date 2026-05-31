import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderItemFindFirstSelectSchema: z.ZodType<Prisma.OrderItemSelect>;
export declare const OrderItemFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    orderId: z.ZodOptional<z.ZodBoolean>;
    productId: z.ZodOptional<z.ZodBoolean>;
    productName: z.ZodOptional<z.ZodBoolean>;
    quantity: z.ZodOptional<z.ZodBoolean>;
    billingPeriod: z.ZodOptional<z.ZodBoolean>;
    unitPrice: z.ZodOptional<z.ZodBoolean>;
    totalPrice: z.ZodOptional<z.ZodBoolean>;
    specsSnapshot: z.ZodOptional<z.ZodBoolean>;
    expiresAt: z.ZodOptional<z.ZodBoolean>;
    order: z.ZodOptional<z.ZodBoolean>;
    product: z.ZodOptional<z.ZodBoolean>;
    server: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const OrderItemFindFirstSchema: z.ZodType<Prisma.OrderItemFindFirstArgs>;
export declare const OrderItemFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
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
    }>, z.ZodArray<z.ZodEnum<{
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
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstOrderItem.schema.d.ts.map