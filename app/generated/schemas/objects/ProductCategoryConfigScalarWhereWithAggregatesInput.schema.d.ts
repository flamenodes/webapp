import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput>;
export declare const ProductCategoryConfigScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    category: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumProductCategoryWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumProductCategoryWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>]>>;
    billingPeriods: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EnumBillingPeriodNullableListFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumBillingPeriodNullableListFilter<never>, unknown>>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigScalarWhereWithAggregatesInput.schema.d.ts.map