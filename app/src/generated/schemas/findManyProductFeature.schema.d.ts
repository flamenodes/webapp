import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductFeatureFindManySelectSchema: z.ZodType<Prisma.ProductFeatureSelect>;
export declare const ProductFeatureFindManySelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    productId: z.ZodOptional<z.ZodBoolean>;
    product: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodBoolean>;
    sortOrder: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const ProductFeatureFindManySchema: z.ZodType<Prisma.ProductFeatureFindManyArgs>;
export declare const ProductFeatureFindManyZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductFeatureOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductFeatureWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ProductFeatureWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        productId: "productId";
        label: "label";
        sortOrder: "sortOrder";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        productId: "productId";
        label: "label";
        sortOrder: "sortOrder";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findManyProductFeature.schema.d.ts.map