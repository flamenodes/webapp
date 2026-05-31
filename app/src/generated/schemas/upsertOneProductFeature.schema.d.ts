import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductFeatureUpsertOneSchema: z.ZodType<Prisma.ProductFeatureUpsertArgs>;
export declare const ProductFeatureUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ProductFeatureWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateInput, unknown>>, z.ZodType<Prisma.ProductFeatureUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUpdateInput, unknown>>, z.ZodType<Prisma.ProductFeatureUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneProductFeature.schema.d.ts.map