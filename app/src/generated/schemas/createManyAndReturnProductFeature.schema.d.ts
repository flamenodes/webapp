import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductFeatureCreateManyAndReturnSchema: z.ZodType<Prisma.ProductFeatureCreateManyAndReturnArgs>;
export declare const ProductFeatureCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductFeatureCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnProductFeature.schema.d.ts.map