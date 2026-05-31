import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductUpdateToOneWithWhereWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutFeaturesInput>;
export declare const ProductUpdateToOneWithWhereWithoutFeaturesInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutFeaturesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutFeaturesInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateToOneWithWhereWithoutFeaturesInput.schema.d.ts.map