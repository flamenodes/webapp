import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpsertWithoutAssignedTicketsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAssignedTicketsInput>;
export declare const UserUpsertWithoutAssignedTicketsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutAssignedTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutAssignedTicketsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserCreateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateWithoutAssignedTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateWithoutAssignedTicketsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpsertWithoutAssignedTicketsInput.schema.d.ts.map