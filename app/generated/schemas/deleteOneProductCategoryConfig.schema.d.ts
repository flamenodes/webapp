import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigDeleteOneSchema: z.ZodType<Prisma.ProductCategoryConfigDeleteArgs>;
export declare const ProductCategoryConfigDeleteOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ProductCategoryConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=deleteOneProductCategoryConfig.schema.d.ts.map