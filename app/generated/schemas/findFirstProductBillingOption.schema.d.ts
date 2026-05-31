import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionFindFirstSelectSchema: z.ZodType<Prisma.ProductBillingOptionSelect>;
export declare const ProductBillingOptionFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    productId: z.ZodOptional<z.ZodBoolean>;
    product: z.ZodOptional<z.ZodBoolean>;
    billingPeriod: z.ZodOptional<z.ZodBoolean>;
    price: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const ProductBillingOptionFindFirstSchema: z.ZodType<Prisma.ProductBillingOptionFindFirstArgs>;
export declare const ProductBillingOptionFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        productId: "productId";
        billingPeriod: "billingPeriod";
        price: "price";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        productId: "productId";
        billingPeriod: "billingPeriod";
        price: "price";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstProductBillingOption.schema.d.ts.map