import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutFeaturesNestedInput>;
export declare const ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutFeaturesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutFeaturesInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCreateOrConnectWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateOrConnectWithoutFeaturesInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductUpsertWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpsertWithoutFeaturesInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateToOneWithWhereWithoutFeaturesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutFeaturesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutFeaturesInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateOneRequiredWithoutFeaturesNestedInput.schema.d.ts.map