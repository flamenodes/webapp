import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductUpdateInputObjectSchema: z.ZodType<Prisma.ProductUpdateInput>;
export declare const ProductUpdateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    planName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    icon: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    badge: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    category: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumProductCategoryFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumProductCategoryFieldUpdateOperationsInput, unknown>>>]>>;
    price: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    sortOrder: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    featureCategory: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    inStock: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.BoolFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.BoolFieldUpdateOperationsInput, unknown>>>]>>;
    specs: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    deployMode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    features: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureUpdateManyWithoutProductNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUpdateManyWithoutProductNestedInput, unknown>>>>;
    discount: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountUpdateOneWithoutProductNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUpdateOneWithoutProductNestedInput, unknown>>>>;
    cartItems: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemUpdateManyWithoutProductNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateManyWithoutProductNestedInput, unknown>>>>;
    orderItems: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateManyWithoutProductNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateManyWithoutProductNestedInput, unknown>>>>;
    billingOptions: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionUpdateManyWithoutProductNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUpdateManyWithoutProductNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateInput.schema.d.ts.map