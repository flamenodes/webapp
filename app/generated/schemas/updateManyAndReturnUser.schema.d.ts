import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const UserUpdateManyAndReturnSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs>;
export declare const UserUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.UserUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnUser.schema.d.ts.map