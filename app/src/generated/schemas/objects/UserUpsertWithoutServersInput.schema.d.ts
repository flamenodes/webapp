import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUpsertWithoutServersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutServersInput>;
export declare const UserUpsertWithoutServersInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutServersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutServersInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutServersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutServersInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpsertWithoutServersInput.schema.d.ts.map