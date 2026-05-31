import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateNestedOneWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTicketsInput>;
export declare const UserCreateNestedOneWithoutTicketsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutTicketsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutTicketsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateNestedOneWithoutTicketsInput.schema.d.ts.map