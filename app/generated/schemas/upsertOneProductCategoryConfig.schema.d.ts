import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCategoryConfigUpsertOneSchema: z.ZodType<Prisma.ProductCategoryConfigUpsertArgs>;
export declare const ProductCategoryConfigUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ProductCategoryConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCategoryConfigCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCreateInput, unknown>>, z.ZodType<Prisma.ProductCategoryConfigUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCategoryConfigUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigUpdateInput, unknown>>, z.ZodType<Prisma.ProductCategoryConfigUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneProductCategoryConfig.schema.d.ts.map