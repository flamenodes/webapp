import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.OrderItemCreateWithoutProductInput>;
export declare const OrderItemCreateWithoutProductInputObjectZodSchema: z.ZodObject<{
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
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
    order: z.ZodLazy<z.ZodType<Prisma.OrderCreateNestedOneWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateNestedOneWithoutItemsInput, unknown>>>;
    server: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerCreateNestedOneWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateNestedOneWithoutOrderItemInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemCreateWithoutProductInput.schema.d.ts.map