import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const UserUpdateOneSchema: z.ZodType<Prisma.UserUpdateArgs>;
export declare const UserUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.UserUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateInput, unknown>>, z.ZodType<Prisma.UserUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneUser.schema.d.ts.map