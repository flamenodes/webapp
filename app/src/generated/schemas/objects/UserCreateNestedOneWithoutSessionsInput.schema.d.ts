import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserCreateNestedOneWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput>;
export declare const UserCreateNestedOneWithoutSessionsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutSessionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutSessionsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutSessionsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateNestedOneWithoutSessionsInput.schema.d.ts.map