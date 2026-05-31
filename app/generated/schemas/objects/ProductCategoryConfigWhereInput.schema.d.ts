import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigWhereInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigWhereInput>;
export declare const ProductCategoryConfigWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    category: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumProductCategoryFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumProductCategoryFilter<never>, unknown>>>, z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>]>>;
    billingPeriods: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EnumBillingPeriodNullableListFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumBillingPeriodNullableListFilter<never>, unknown>>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigWhereInput.schema.d.ts.map