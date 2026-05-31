import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateOrConnectWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutNotificationsInput>;
export declare const UserCreateOrConnectWithoutNotificationsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutNotificationsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutNotificationsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateOrConnectWithoutNotificationsInput.schema.d.ts.map