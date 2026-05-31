import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductCreateNestedOneWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutFeaturesInput>;
export declare const ProductCreateNestedOneWithoutFeaturesInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutFeaturesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutFeaturesInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCreateOrConnectWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateOrConnectWithoutFeaturesInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCreateNestedOneWithoutFeaturesInput.schema.d.ts.map