import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureUpsertWithWhereUniqueWithoutProductInput>;
export declare const ProductFeatureUpsertWithWhereUniqueWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductFeatureWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductFeatureUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductFeatureUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUncheckedUpdateWithoutProductInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductFeatureCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductFeatureUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUncheckedCreateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureUpsertWithWhereUniqueWithoutProductInput.schema.d.ts.map