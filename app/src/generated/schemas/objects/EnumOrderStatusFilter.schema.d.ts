import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const EnumOrderStatusFilterObjectSchema: z.ZodType<Prisma.EnumOrderStatusFilter>;
export declare const EnumOrderStatusFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumOrderStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumOrderStatusFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumOrderStatusFilter.schema.d.ts.map