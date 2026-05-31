import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductListRelationFilterObjectSchema: z.ZodType<Prisma.ProductListRelationFilter>;
export declare const ProductListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductListRelationFilter.schema.d.ts.map