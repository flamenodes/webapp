import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigCreateManyAndReturnSchema: z.ZodType<Prisma.ProductCategoryConfigCreateManyAndReturnArgs>;
export declare const ProductCategoryConfigCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCategoryConfigCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductCategoryConfigCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnProductCategoryConfig.schema.d.ts.map