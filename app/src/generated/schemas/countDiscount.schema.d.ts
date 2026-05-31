import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const DiscountCountSchema: z.ZodType<Prisma.DiscountCountArgs>;
export declare const DiscountCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.DiscountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.DiscountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.DiscountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.DiscountCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countDiscount.schema.d.ts.map