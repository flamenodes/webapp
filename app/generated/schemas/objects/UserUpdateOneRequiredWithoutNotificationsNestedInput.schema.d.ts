import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateOneRequiredWithoutNotificationsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput>;
export declare const UserUpdateOneRequiredWithoutNotificationsNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutNotificationsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutNotificationsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutNotificationsInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpsertWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpsertWithoutNotificationsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutNotificationsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutNotificationsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateOneRequiredWithoutNotificationsNestedInput.schema.d.ts.map