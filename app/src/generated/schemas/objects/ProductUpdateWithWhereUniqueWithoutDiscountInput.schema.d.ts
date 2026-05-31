import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductUpdateWithWhereUniqueWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutDiscountInput>;
export declare const ProductUpdateWithWhereUniqueWithoutDiscountInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutDiscountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutDiscountInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateWithWhereUniqueWithoutDiscountInput.schema.d.ts.map