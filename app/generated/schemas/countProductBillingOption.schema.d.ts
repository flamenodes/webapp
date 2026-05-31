import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionCountSchema: z.ZodType<Prisma.ProductBillingOptionCountArgs>;
export declare const ProductBillingOptionCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductBillingOptionCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countProductBillingOption.schema.d.ts.map