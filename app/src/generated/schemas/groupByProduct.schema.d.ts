import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductGroupBySchema: z.ZodType<Prisma.ProductGroupByArgs>;
export declare const ProductGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ProductOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        sortOrder: "sortOrder";
        price: "price";
        planName: "planName";
        icon: "icon";
        badge: "badge";
        category: "category";
        featureCategory: "featureCategory";
        inStock: "inStock";
        discountId: "discountId";
        specs: "specs";
        deployMode: "deployMode";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ProductCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ProductMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ProductMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ProductAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ProductSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ProductSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByProduct.schema.d.ts.map