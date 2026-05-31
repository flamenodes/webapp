import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const AccountUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput>;
export declare const AccountUncheckedUpdateManyWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    accountId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    providerId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    accessToken: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    refreshToken: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    idToken: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    accessTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown>>>]>>>;
    refreshTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown>>>]>>>;
    scope: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    password: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUncheckedUpdateManyWithoutUserInput.schema.d.ts.map