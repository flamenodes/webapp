import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpsertWithoutCartInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCartInput>;
export declare const UserUpsertWithoutCartInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutCartInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutCartInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpsertWithoutCartInput.schema.d.ts.map