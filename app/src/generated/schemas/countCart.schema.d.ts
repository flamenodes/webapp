import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartCountSchema: z.ZodType<Prisma.CartCountArgs>;
export declare const CartCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CartOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.CartCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countCart.schema.d.ts.map