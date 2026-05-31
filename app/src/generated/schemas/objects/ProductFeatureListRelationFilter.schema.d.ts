import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureListRelationFilterObjectSchema: z.ZodType<Prisma.ProductFeatureListRelationFilter>;
export declare const ProductFeatureListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureListRelationFilter.schema.d.ts.map