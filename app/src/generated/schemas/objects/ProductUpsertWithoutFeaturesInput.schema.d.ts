import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductUpsertWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutFeaturesInput>;
export declare const ProductUpsertWithoutFeaturesInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutFeaturesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutFeaturesInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutFeaturesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutFeaturesInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpsertWithoutFeaturesInput.schema.d.ts.map