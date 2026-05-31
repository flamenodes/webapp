import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductFeatureCreateManyProductInputEnvelope>;
export declare const ProductFeatureCreateManyProductInputEnvelopeObjectZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductFeatureCreateManyProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateManyProductInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ProductFeatureCreateManyProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateManyProductInput, unknown>>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureCreateManyProductInputEnvelope.schema.d.ts.map