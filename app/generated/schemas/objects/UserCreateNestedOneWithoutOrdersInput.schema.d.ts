import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserCreateNestedOneWithoutOrdersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrdersInput>;
export declare const UserCreateNestedOneWithoutOrdersInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutOrdersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutOrdersInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutOrdersInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserCreateNestedOneWithoutOrdersInput.schema.d.ts.map