import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartItemCountSchema: z.ZodType<Prisma.CartItemCountArgs>;
export declare const CartItemCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CartItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartItemOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.CartItemCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countCartItem.schema.d.ts.map