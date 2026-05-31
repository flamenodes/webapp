import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateOrConnectWithoutProductInput>;
export declare const ProductFeatureCreateOrConnectWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductFeatureWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductFeatureCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductFeatureUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureUncheckedCreateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureCreateOrConnectWithoutProductInput.schema.d.ts.map