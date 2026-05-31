import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.OrderItemCreateWithoutOrderInput>;
export declare const OrderItemCreateWithoutOrderInputObjectZodSchema: z.ZodObject<{
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
    product: z.ZodLazy<z.ZodType<Prisma.ProductCreateNestedOneWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateNestedOneWithoutOrderItemsInput, unknown>>>;
    server: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerCreateNestedOneWithoutOrderItemInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerCreateNestedOneWithoutOrderItemInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemCreateWithoutOrderInput.schema.d.ts.map