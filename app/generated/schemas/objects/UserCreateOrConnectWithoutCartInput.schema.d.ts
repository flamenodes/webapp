import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateOrConnectWithoutCartInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCartInput>;
export declare const UserCreateOrConnectWithoutCartInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutCartInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateOrConnectWithoutCartInput.schema.d.ts.map