import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrderUncheckedCreateInput>;
export declare const OrderUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
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
    items: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUncheckedCreateInput.schema.d.ts.map