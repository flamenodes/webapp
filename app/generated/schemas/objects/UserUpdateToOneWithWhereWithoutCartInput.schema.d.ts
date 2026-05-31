import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserUpdateToOneWithWhereWithoutCartInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCartInput>;
export declare const UserUpdateToOneWithWhereWithoutCartInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutCartInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutCartInput.schema.d.ts.map