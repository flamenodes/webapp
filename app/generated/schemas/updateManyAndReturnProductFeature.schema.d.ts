import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductFeatureUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductFeatureUpdateManyAndReturnArgs>;
export declare const ProductFeatureUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.ProductFeatureUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductFeatureWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnProductFeature.schema.d.ts.map