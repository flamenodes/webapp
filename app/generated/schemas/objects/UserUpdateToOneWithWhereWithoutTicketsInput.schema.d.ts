import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateToOneWithWhereWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTicketsInput>;
export declare const UserUpdateToOneWithWhereWithoutTicketsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutTicketsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutTicketsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutTicketsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutTicketsInput.schema.d.ts.map