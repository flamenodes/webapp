import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateOrConnectWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput>;
export declare const UserCreateOrConnectWithoutAccountsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutAccountsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutAccountsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateOrConnectWithoutAccountsInput.schema.d.ts.map