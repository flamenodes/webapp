import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput>;
export declare const ProductOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    planName: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    icon: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    badge: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    category: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    price: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    featureCategory: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    inStock: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    discountId: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    specs: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    deployMode: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    features: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureOrderByRelationAggregateInput, unknown>>>>;
    discount: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountOrderByWithRelationInput, unknown>>>>;
    cartItems: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemOrderByRelationAggregateInput, unknown>>>>;
    orderItems: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemOrderByRelationAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemOrderByRelationAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductOrderByWithRelationInput.schema.d.ts.map