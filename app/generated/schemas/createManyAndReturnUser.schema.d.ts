import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const UserCreateManyAndReturnSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs>;
export declare const UserCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.UserCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.UserCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnUser.schema.d.ts.map