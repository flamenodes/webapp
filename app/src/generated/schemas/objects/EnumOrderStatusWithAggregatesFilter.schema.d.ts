import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const EnumOrderStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumOrderStatusWithAggregatesFilter>;
export declare const EnumOrderStatusWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        PAYMENT_FAILED: "PAYMENT_FAILED";
        PAID: "PAID";
        PROCESSING: "PROCESSING";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
        REFUNDED: "REFUNDED";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        PENDING: "PENDING";
        PAYMENT_FAILED: "PAYMENT_FAILED";
        PAID: "PAID";
        PROCESSING: "PROCESSING";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
        REFUNDED: "REFUNDED";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        PENDING: "PENDING";
        PAYMENT_FAILED: "PAYMENT_FAILED";
        PAID: "PAID";
        PROCESSING: "PROCESSING";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
        REFUNDED: "REFUNDED";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        PENDING: "PENDING";
        PAYMENT_FAILED: "PAYMENT_FAILED";
        PAID: "PAID";
        PROCESSING: "PROCESSING";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
        REFUNDED: "REFUNDED";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumOrderStatusWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumOrderStatusWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumOrderStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumOrderStatusFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumOrderStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumOrderStatusFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumOrderStatusWithAggregatesFilter.schema.d.ts.map