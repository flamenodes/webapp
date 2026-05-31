import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartItemFindFirstSelectSchema: z.ZodType<Prisma.CartItemSelect>;
export declare const CartItemFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    cartId: z.ZodOptional<z.ZodBoolean>;
    productId: z.ZodOptional<z.ZodBoolean>;
    quantity: z.ZodOptional<z.ZodBoolean>;
    billingPeriod: z.ZodOptional<z.ZodBoolean>;
    configuration: z.ZodOptional<z.ZodBoolean>;
    cart: z.ZodOptional<z.ZodBoolean>;
    product: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const CartItemFindFirstSchema: z.ZodType<Prisma.CartItemFindFirstArgs>;
export declare const CartItemFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CartItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        productId: "productId";
        cartId: "cartId";
        quantity: "quantity";
        billingPeriod: "billingPeriod";
        configuration: "configuration";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        productId: "productId";
        cartId: "cartId";
        quantity: "quantity";
        billingPeriod: "billingPeriod";
        configuration: "configuration";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstCartItem.schema.d.ts.map