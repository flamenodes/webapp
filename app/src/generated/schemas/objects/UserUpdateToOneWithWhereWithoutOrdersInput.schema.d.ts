import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const UserUpdateToOneWithWhereWithoutOrdersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput>;
export declare const UserUpdateToOneWithWhereWithoutOrdersInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UserUpdateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateWithoutOrdersInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.UserUncheckedUpdateWithoutOrdersInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateWithoutOrdersInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutOrdersInput.schema.d.ts.map