import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput>;
export declare const UserUpdateOneRequiredWithoutAccountsNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutAccountsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutAccountsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutAccountsInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpsertWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpsertWithoutAccountsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutAccountsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutAccountsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateOneRequiredWithoutAccountsNestedInput.schema.d.ts.map