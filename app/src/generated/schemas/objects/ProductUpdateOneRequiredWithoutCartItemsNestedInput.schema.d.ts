import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutCartItemsNestedInput>;
export declare const ProductUpdateOneRequiredWithoutCartItemsNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutCartItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutCartItemsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCreateOrConnectWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateOrConnectWithoutCartItemsInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductUpsertWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpsertWithoutCartItemsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateToOneWithWhereWithoutCartItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutCartItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutCartItemsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateOneRequiredWithoutCartItemsNestedInput.schema.d.ts.map