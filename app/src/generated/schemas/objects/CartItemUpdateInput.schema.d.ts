import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemUpdateInputObjectSchema: z.ZodType<Prisma.CartItemUpdateInput>;
export declare const CartItemUpdateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    quantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    billingPeriod: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumBillingPeriodFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumBillingPeriodFieldUpdateOperationsInput, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    cart: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartUpdateOneRequiredWithoutItemsNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateOneRequiredWithoutItemsNestedInput, unknown>>>>;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductUpdateOneRequiredWithoutCartItemsNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateOneRequiredWithoutCartItemsNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemUpdateInput.schema.d.ts.map