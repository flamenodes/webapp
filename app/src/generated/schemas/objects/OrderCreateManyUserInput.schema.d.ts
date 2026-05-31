import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderCreateManyUserInputObjectSchema: z.ZodType<Prisma.OrderCreateManyUserInput>;
export declare const OrderCreateManyUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        PAYMENT_FAILED: "PAYMENT_FAILED";
        PAID: "PAID";
        PROCESSING: "PROCESSING";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
        REFUNDED: "REFUNDED";
    }>>;
    subtotalAmount: z.ZodNumber;
    discountAmount: z.ZodOptional<z.ZodNumber>;
    totalAmount: z.ZodNumber;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    deliveryMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    deliveryData: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=OrderCreateManyUserInput.schema.d.ts.map