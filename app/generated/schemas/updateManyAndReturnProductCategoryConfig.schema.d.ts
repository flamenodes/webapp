import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductCategoryConfigUpdateManyAndReturnArgs>;
export declare const ProductCategoryConfigUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.ProductCategoryConfigUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnProductCategoryConfig.schema.d.ts.map