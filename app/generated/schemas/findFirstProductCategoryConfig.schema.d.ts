import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigFindFirstSelectSchema: z.ZodType<Prisma.ProductCategoryConfigSelect>;
export declare const ProductCategoryConfigFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    category: z.ZodOptional<z.ZodBoolean>;
    billingPeriods: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const ProductCategoryConfigFindFirstSchema: z.ZodType<Prisma.ProductCategoryConfigFindFirstArgs>;
export declare const ProductCategoryConfigFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductCategoryConfigOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductCategoryConfigOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        category: "category";
        billingPeriods: "billingPeriods";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        category: "category";
        billingPeriods: "billingPeriods";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstProductCategoryConfig.schema.d.ts.map