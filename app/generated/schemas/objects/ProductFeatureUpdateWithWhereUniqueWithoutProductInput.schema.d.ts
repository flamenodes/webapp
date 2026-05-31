import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureUpdateWithWhereUniqueWithoutProductInput>;
export declare const ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductFeatureWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductFeatureUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductFeatureUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUncheckedUpdateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureUpdateWithWhereUniqueWithoutProductInput.schema.d.ts.map