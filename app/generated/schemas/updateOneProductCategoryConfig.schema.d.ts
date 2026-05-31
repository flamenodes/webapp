import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigUpdateOneSchema: z.ZodType<Prisma.ProductCategoryConfigUpdateArgs>;
export declare const ProductCategoryConfigUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCategoryConfigUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigUpdateInput, unknown>>, z.ZodType<Prisma.ProductCategoryConfigUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.ProductCategoryConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneProductCategoryConfig.schema.d.ts.map