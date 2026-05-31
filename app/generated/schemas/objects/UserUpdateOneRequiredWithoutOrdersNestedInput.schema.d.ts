import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateOneRequiredWithoutOrdersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput>;
export declare const UserUpdateOneRequiredWithoutOrdersNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutOrdersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutOrdersInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutOrdersInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpsertWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpsertWithoutOrdersInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutOrdersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutOrdersInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateOneRequiredWithoutOrdersNestedInput.schema.d.ts.map