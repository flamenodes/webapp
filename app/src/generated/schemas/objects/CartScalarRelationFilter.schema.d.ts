import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartScalarRelationFilterObjectSchema: z.ZodType<Prisma.CartScalarRelationFilter>;
export declare const CartScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>>;
    isNot: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartScalarRelationFilter.schema.d.ts.map