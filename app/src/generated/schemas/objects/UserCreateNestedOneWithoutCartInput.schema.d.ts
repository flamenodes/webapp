import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserCreateNestedOneWithoutCartInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCartInput>;
export declare const UserCreateNestedOneWithoutCartInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutCartInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutCartInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateNestedOneWithoutCartInput.schema.d.ts.map