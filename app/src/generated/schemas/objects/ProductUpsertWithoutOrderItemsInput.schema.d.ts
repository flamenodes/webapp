import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductUpsertWithoutOrderItemsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutOrderItemsInput>;
export declare const ProductUpsertWithoutOrderItemsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutOrderItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutOrderItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutOrderItemsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpsertWithoutOrderItemsInput.schema.d.ts.map