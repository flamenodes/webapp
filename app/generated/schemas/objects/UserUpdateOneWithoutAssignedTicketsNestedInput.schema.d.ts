import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateOneWithoutAssignedTicketsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutAssignedTicketsNestedInput>;
export declare const UserUpdateOneWithoutAssignedTicketsNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutAssignedTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutAssignedTicketsInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpsertWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpsertWithoutAssignedTicketsInput, unknown>>>>;
    disconnect: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>]>>;
    delete: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>]>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateToOneWithWhereWithoutAssignedTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutAssignedTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutAssignedTicketsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateOneWithoutAssignedTicketsNestedInput.schema.d.ts.map