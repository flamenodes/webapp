import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateNestedOneWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationsInput>;
export declare const UserCreateNestedOneWithoutNotificationsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutNotificationsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutNotificationsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutNotificationsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateNestedOneWithoutNotificationsInput.schema.d.ts.map