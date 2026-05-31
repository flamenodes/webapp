import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductUpsertWithoutCartItemsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutCartItemsInput>;
export declare const ProductUpsertWithoutCartItemsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutCartItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutCartItemsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutCartItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutCartItemsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpsertWithoutCartItemsInput.schema.d.ts.map