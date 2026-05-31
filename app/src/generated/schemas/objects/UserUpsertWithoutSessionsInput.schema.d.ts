import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUpsertWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput>;
export declare const UserUpsertWithoutSessionsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutSessionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutSessionsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutSessionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutSessionsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpsertWithoutSessionsInput.schema.d.ts.map