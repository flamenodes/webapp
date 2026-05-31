import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpsertWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTicketsInput>;
export declare const UserUpsertWithoutTicketsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutTicketsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutTicketsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpsertWithoutTicketsInput.schema.d.ts.map