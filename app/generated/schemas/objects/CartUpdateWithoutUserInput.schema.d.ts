import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.CartUpdateWithoutUserInput>;
export declare const CartUpdateWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    items: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemUpdateManyWithoutCartNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateManyWithoutCartNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUpdateWithoutUserInput.schema.d.ts.map