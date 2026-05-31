import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemCreateWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutCartInput>;
export declare const CartItemCreateWithoutCartInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    quantity: z.ZodOptional<z.ZodNumber>;
    billingPeriod: z.ZodOptional<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>;
    configuration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    product: z.ZodLazy<z.ZodType<Prisma.ProductCreateNestedOneWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateNestedOneWithoutCartItemsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemCreateWithoutCartInput.schema.d.ts.map