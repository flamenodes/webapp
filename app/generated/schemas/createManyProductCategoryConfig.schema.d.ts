import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigCreateManySchema: z.ZodType<Prisma.ProductCategoryConfigCreateManyArgs>;
export declare const ProductCategoryConfigCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCategoryConfigCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductCategoryConfigCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyProductCategoryConfig.schema.d.ts.map