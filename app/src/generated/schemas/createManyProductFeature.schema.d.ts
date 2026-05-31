import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductFeatureCreateManySchema: z.ZodType<Prisma.ProductFeatureCreateManyArgs>;
export declare const ProductFeatureCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductFeatureCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductFeatureCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyProductFeature.schema.d.ts.map