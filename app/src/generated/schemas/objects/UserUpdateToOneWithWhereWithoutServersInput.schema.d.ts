import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUpdateToOneWithWhereWithoutServersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutServersInput>;
export declare const UserUpdateToOneWithWhereWithoutServersInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutServersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutServersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutServersInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutServersInput.schema.d.ts.map