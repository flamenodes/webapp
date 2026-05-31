import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const UserCreateManySchema: z.ZodType<Prisma.UserCreateManyArgs>;
export declare const UserCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.UserCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.UserCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyUser.schema.d.ts.map