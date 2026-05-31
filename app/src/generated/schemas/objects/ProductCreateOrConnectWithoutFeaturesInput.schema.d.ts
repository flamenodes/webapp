import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductCreateOrConnectWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutFeaturesInput>;
export declare const ProductCreateOrConnectWithoutFeaturesInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutFeaturesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutFeaturesInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateOrConnectWithoutFeaturesInput.schema.d.ts.map