import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemUncheckedCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput>;
export declare const OrderItemUncheckedCreateWithoutOrderInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    productId: z.ZodString;
    productName: z.ZodString;
    quantity: z.ZodOptional<z.ZodNumber>;
    billingPeriod: z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>;
    unitPrice: z.ZodNumber;
    totalPrice: z.ZodNumber;
    specsSnapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    configuration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    server: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerUncheckedCreateNestedOneWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedCreateNestedOneWithoutOrderItemInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUncheckedCreateWithoutOrderInput.schema.d.ts.map