import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const UserUpsertOneSchema: z.ZodType<Prisma.UserUpsertArgs>;
export declare const UserUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.UserCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateInput, unknown>>, z.ZodType<Prisma.UserUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.UserUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateInput, unknown>>, z.ZodType<Prisma.UserUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneUser.schema.d.ts.map