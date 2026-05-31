import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CouponUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CouponUncheckedUpdateInput>;
export declare const CouponUncheckedUpdateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumCouponTypeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumCouponTypeFieldUpdateOperationsInput, unknown>>>]>>;
    amount: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    active: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.BoolFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.BoolFieldUpdateOperationsInput, unknown>>>]>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown>>>]>>>;
    maxUses: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableIntFieldUpdateOperationsInput, unknown>>>]>>>;
    usedCount: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=CouponUncheckedUpdateInput.schema.d.ts.map