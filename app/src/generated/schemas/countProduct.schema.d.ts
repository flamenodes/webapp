import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductCountSchema: z.ZodType<Prisma.ProductCountArgs>;
export declare const ProductCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countProduct.schema.d.ts.map