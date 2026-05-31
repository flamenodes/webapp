import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureUpdateManyWithWhereWithoutProductInput>;
export declare const ProductFeatureUpdateManyWithWhereWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductFeatureScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductFeatureUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductFeatureUncheckedUpdateManyWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUncheckedUpdateManyWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureUpdateManyWithWhereWithoutProductInput.schema.d.ts.map