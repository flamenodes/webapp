import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput>;
export declare const ProductScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    planName: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    icon: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>>;
    badge: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>>;
    category: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumProductCategoryWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumProductCategoryWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>]>>;
    price: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntWithAggregatesFilter<never>, unknown>>>, z.ZodNumber]>>;
    sortOrder: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntWithAggregatesFilter<never>, unknown>>>, z.ZodNumber]>>;
    featureCategory: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    inStock: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.BoolWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.BoolWithAggregatesFilter<never>, unknown>>>, z.ZodBoolean]>>;
    discountId: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>>;
    specs: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.JsonWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.JsonWithAggregatesFilter<never>, unknown>>>>;
    deployMode: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductScalarWhereWithAggregatesInput.schema.d.ts.map