import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateToOneWithWhereWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput>;
export declare const UserUpdateToOneWithWhereWithoutNotificationsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutNotificationsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutNotificationsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutNotificationsInput.schema.d.ts.map