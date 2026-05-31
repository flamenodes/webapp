import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemUpdateInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateInput>;
export declare const OrderItemUpdateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    productName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    quantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    billingPeriod: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumBillingPeriodFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumBillingPeriodFieldUpdateOperationsInput, unknown>>>]>>;
    unitPrice: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    totalPrice: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    specsSnapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown>>>]>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    order: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput, unknown>>>>;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput, unknown>>>>;
    server: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerUpdateOneWithoutOrderItemNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUpdateOneWithoutOrderItemNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpdateInput.schema.d.ts.map