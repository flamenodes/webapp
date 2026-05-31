import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.CartUncheckedUpdateWithoutUserInput>;
export declare const CartUncheckedUpdateWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    items: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutCartNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedUpdateManyWithoutCartNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUncheckedUpdateWithoutUserInput.schema.d.ts.map