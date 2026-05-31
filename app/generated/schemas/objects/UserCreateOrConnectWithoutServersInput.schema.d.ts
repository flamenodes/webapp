import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateOrConnectWithoutServersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutServersInput>;
export declare const UserCreateOrConnectWithoutServersInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutServersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutServersInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateOrConnectWithoutServersInput.schema.d.ts.map