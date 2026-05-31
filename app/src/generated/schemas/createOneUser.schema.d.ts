import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const UserCreateOneSchema: z.ZodType<Prisma.UserCreateArgs>;
export declare const UserCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.UserCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateInput, unknown>>, z.ZodType<Prisma.UserUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneUser.schema.d.ts.map