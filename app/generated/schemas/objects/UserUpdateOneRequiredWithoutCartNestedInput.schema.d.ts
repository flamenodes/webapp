import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateOneRequiredWithoutCartNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCartNestedInput>;
export declare const UserUpdateOneRequiredWithoutCartNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutCartInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutCartInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpsertWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpsertWithoutCartInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateToOneWithWhereWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutCartInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateOneRequiredWithoutCartNestedInput.schema.d.ts.map