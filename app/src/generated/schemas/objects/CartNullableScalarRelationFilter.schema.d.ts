import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.CartNullableScalarRelationFilter>;
export declare const CartNullableScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>>>;
    isNot: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartNullableScalarRelationFilter.schema.d.ts.map