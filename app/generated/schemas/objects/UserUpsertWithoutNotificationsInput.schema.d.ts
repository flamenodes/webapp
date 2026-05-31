import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpsertWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutNotificationsInput>;
export declare const UserUpsertWithoutNotificationsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutNotificationsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutNotificationsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutNotificationsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutNotificationsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpsertWithoutNotificationsInput.schema.d.ts.map