import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductFeatureUpdateOneSchema: z.ZodType<Prisma.ProductFeatureUpdateArgs>;
export declare const ProductFeatureUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUpdateInput, unknown>>, z.ZodType<Prisma.ProductFeatureUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.ProductFeatureWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneProductFeature.schema.d.ts.map