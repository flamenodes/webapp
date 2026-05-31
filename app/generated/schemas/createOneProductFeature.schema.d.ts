import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductFeatureCreateOneSchema: z.ZodType<Prisma.ProductFeatureCreateArgs>;
export declare const ProductFeatureCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateInput, unknown>>, z.ZodType<Prisma.ProductFeatureUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneProductFeature.schema.d.ts.map