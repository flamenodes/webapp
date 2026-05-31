import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigCreateOneSchema: z.ZodType<Prisma.ProductCategoryConfigCreateArgs>;
export declare const ProductCategoryConfigCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCategoryConfigCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCreateInput, unknown>>, z.ZodType<Prisma.ProductCategoryConfigUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneProductCategoryConfig.schema.d.ts.map