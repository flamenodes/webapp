import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserNullableScalarRelationFilter>;
export declare const UserNullableScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>>;
    isNot: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>>>;
}, z.core.$strict>;
//# sourceMappingURL=UserNullableScalarRelationFilter.schema.d.ts.map