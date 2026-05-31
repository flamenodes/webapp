import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductWhereInputObjectSchema: z.ZodType<Prisma.ProductWhereInput>;
export declare const ProductWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    planName: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    icon: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableFilter<never>, unknown>>>, z.ZodString]>>>;
    badge: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableFilter<never>, unknown>>>, z.ZodString]>>>;
    category: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumProductCategoryFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumProductCategoryFilter<never>, unknown>>>, z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>]>>;
    price: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntFilter<never>, unknown>>>, z.ZodNumber]>>;
    sortOrder: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntFilter<never>, unknown>>>, z.ZodNumber]>>;
    featureCategory: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    inStock: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.BoolFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.BoolFilter<never>, unknown>>>, z.ZodBoolean]>>;
    discountId: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableFilter<never>, unknown>>>, z.ZodString]>>>;
    specs: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.JsonFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.JsonFilter<never>, unknown>>>>;
    deployMode: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    features: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureListRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureListRelationFilter, unknown>>>>;
    discount: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountNullableScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.DiscountNullableScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>]>>;
    cartItems: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemListRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.CartItemListRelationFilter, unknown>>>>;
    orderItems: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemListRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemListRelationFilter, unknown>>>>;
    billingOptions: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionListRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionListRelationFilter, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductWhereInput.schema.d.ts.map