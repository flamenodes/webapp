import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput>;
export declare const UserUpdateOneRequiredWithoutSessionsNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutSessionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutSessionsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutSessionsInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpsertWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpsertWithoutSessionsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutSessionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutSessionsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateOneRequiredWithoutSessionsNestedInput.schema.d.ts.map