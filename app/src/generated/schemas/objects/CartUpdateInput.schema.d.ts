import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartUpdateInputObjectSchema: z.ZodType<Prisma.CartUpdateInput>;
export declare const CartUpdateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    user: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpdateOneRequiredWithoutCartNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateOneRequiredWithoutCartNestedInput, unknown>>>>;
    items: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemUpdateManyWithoutCartNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateManyWithoutCartNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUpdateInput.schema.d.ts.map