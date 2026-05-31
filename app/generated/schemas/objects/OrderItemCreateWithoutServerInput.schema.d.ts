import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemCreateWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemCreateWithoutServerInput>;
export declare const OrderItemCreateWithoutServerInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
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
    order: z.ZodLazy<z.ZodType<Prisma.OrderCreateNestedOneWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateNestedOneWithoutItemsInput, unknown>>>;
    product: z.ZodLazy<z.ZodType<Prisma.ProductCreateNestedOneWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateNestedOneWithoutOrderItemsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemCreateWithoutServerInput.schema.d.ts.map