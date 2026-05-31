import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput>;
export declare const UserUpdateToOneWithWhereWithoutSessionsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutSessionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutSessionsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutSessionsInput.schema.d.ts.map