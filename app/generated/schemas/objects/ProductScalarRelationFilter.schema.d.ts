import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProductScalarRelationFilter>;
export declare const ProductScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
    isNot: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductScalarRelationFilter.schema.d.ts.map