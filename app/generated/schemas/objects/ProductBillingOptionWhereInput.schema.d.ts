import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionWhereInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionWhereInput>;
export declare const ProductBillingOptionWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    productId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    billingPeriod: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumBillingPeriodFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumBillingPeriodFilter<never>, unknown>>>, z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>]>>;
    price: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntFilter<never>, unknown>>>, z.ZodNumber]>>;
    product: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.ProductScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionWhereInput.schema.d.ts.map