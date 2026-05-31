import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductUpdateToOneWithWhereWithoutOrderItemsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemsInput>;
export declare const ProductUpdateToOneWithWhereWithoutOrderItemsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutOrderItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateToOneWithWhereWithoutOrderItemsInput.schema.d.ts.map