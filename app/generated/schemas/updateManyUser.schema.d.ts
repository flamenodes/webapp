import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const UserUpdateManySchema: z.ZodType<Prisma.UserUpdateManyArgs>;
export declare const UserUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.UserUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyUser.schema.d.ts.map