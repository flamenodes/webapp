import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderCreateInputObjectSchema: z.ZodType<Prisma.OrderCreateInput>;
export declare const OrderCreateInputObjectZodSchema: z.ZodObject<{
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
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    user: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutOrdersInput, unknown>>>;
    items: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemCreateNestedManyWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateNestedManyWithoutOrderInput, unknown>>>>;
    invoice: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.InvoiceCreateNestedOneWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateNestedOneWithoutOrderInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderCreateInput.schema.d.ts.map