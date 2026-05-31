import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUpdateOneRequiredWithoutServersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutServersNestedInput>;
export declare const UserUpdateOneRequiredWithoutServersNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutServersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutServersInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserCreateOrConnectWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateOrConnectWithoutServersInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserUpsertWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpsertWithoutServersInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateToOneWithWhereWithoutServersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutServersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutServersInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateOneRequiredWithoutServersNestedInput.schema.d.ts.map