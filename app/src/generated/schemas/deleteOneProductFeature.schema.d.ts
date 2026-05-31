import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductFeatureDeleteOneSchema: z.ZodType<Prisma.ProductFeatureDeleteArgs>;
export declare const ProductFeatureDeleteOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ProductFeatureWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=deleteOneProductFeature.schema.d.ts.map