import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductUpdateManyWithWhereWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutDiscountInput>;
export declare const ProductUpdateManyWithWhereWithoutDiscountInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateManyWithoutDiscountInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateManyWithWhereWithoutDiscountInput.schema.d.ts.map