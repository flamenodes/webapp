import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemWhereInputObjectSchema: z.ZodType<Prisma.CartItemWhereInput>;
export declare const CartItemWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    cartId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    productId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    quantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntFilter<never>, unknown>>>, z.ZodNumber]>>;
    billingPeriod: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumBillingPeriodFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumBillingPeriodFilter<never>, unknown>>>, z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>]>>;
    configuration: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.JsonNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.JsonNullableFilter<never>, unknown>>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    cart: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.CartScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>]>>;
    product: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.ProductScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemWhereInput.schema.d.ts.map