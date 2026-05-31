import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUncheckedUpdateWithoutCartInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCartInput>;
export declare const UserUncheckedUpdateWithoutCartInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    clientId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    emailVerified: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.BoolFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.BoolFieldUpdateOperationsInput, unknown>>>]>>;
    image: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    role: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    banned: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableBoolFieldUpdateOperationsInput, unknown>>>]>>>;
    banReason: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    banExpires: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableDateTimeFieldUpdateOperationsInput, unknown>>>]>>>;
    username: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    firstname: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    lastname: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    displayUsername: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.NullableStringFieldUpdateOperationsInput, unknown>>>]>>>;
    sessions: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput, unknown>>>>;
    accounts: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput, unknown>>>>;
    servers: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ServerUncheckedUpdateManyWithoutUserNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerUncheckedUpdateManyWithoutUserNestedInput, unknown>>>>;
    orders: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUncheckedUpdateWithoutCartInput.schema.d.ts.map