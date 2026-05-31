import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateOrConnectWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTicketsInput>;
export declare const UserCreateOrConnectWithoutTicketsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutTicketsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateOrConnectWithoutTicketsInput.schema.d.ts.map