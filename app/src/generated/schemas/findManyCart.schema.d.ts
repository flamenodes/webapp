import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartFindManySelectSchema: z.ZodType<Prisma.CartSelect>;
export declare const CartFindManySelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    userId: z.ZodOptional<z.ZodBoolean>;
    user: z.ZodOptional<z.ZodBoolean>;
    items: z.ZodOptional<z.ZodBoolean>;
    couponCode: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
    _count: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const CartFindManySchema: z.ZodType<Prisma.CartFindManyArgs>;
export declare const CartFindManyZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CartOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        couponCode: "couponCode";
        updatedAt: "updatedAt";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        couponCode: "couponCode";
        updatedAt: "updatedAt";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findManyCart.schema.d.ts.map