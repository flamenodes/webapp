import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUpsertWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput>;
export declare const UserUpsertWithoutAccountsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutAccountsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutAccountsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutAccountsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutAccountsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpsertWithoutAccountsInput.schema.d.ts.map