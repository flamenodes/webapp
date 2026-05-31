import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateOneRequiredWithoutTicketsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTicketsNestedInput>;
export declare const UserUpdateOneRequiredWithoutTicketsNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutTicketsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutTicketsInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpsertWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpsertWithoutTicketsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateToOneWithWhereWithoutTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutTicketsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateOneRequiredWithoutTicketsNestedInput.schema.d.ts.map