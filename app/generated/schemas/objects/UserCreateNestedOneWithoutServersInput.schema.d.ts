import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateNestedOneWithoutServersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutServersInput>;
export declare const UserCreateNestedOneWithoutServersInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutServersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutServersInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutServersInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateNestedOneWithoutServersInput.schema.d.ts.map