import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionScalarWhereInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionScalarWhereInput>;
export declare const ProductBillingOptionScalarWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionScalarWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionScalarWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionScalarWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionScalarWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionScalarWhereInput, unknown>>>>]>>;
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
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionScalarWhereInput.schema.d.ts.map