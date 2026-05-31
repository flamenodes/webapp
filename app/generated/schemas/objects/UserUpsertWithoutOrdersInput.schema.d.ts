import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpsertWithoutOrdersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOrdersInput>;
export declare const UserUpsertWithoutOrdersInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutOrdersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutOrdersInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutOrdersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutOrdersInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpsertWithoutOrdersInput.schema.d.ts.map