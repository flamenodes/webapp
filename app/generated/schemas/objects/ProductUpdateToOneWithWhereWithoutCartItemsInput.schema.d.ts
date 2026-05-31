import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductUpdateToOneWithWhereWithoutCartItemsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutCartItemsInput>;
export declare const ProductUpdateToOneWithWhereWithoutCartItemsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutCartItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutCartItemsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateToOneWithWhereWithoutCartItemsInput.schema.d.ts.map