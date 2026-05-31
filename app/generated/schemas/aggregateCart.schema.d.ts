import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartAggregateSchema: z.ZodType<Prisma.CartAggregateArgs>;
export declare const CartAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CartOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.CartCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.CartMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.CartMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CartMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateCart.schema.d.ts.map