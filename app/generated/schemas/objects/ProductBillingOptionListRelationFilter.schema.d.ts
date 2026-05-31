import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionListRelationFilterObjectSchema: z.ZodType<Prisma.ProductBillingOptionListRelationFilter>;
export declare const ProductBillingOptionListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionListRelationFilter.schema.d.ts.map