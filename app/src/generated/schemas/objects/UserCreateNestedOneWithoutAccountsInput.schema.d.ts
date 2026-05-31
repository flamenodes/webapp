import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserCreateNestedOneWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput>;
export declare const UserCreateNestedOneWithoutAccountsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutAccountsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutAccountsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutAccountsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateNestedOneWithoutAccountsInput.schema.d.ts.map