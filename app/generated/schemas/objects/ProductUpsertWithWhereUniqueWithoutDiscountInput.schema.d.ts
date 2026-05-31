import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductUpsertWithWhereUniqueWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutDiscountInput>;
export declare const ProductUpsertWithWhereUniqueWithoutDiscountInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutDiscountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutDiscountInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutDiscountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutDiscountInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpsertWithWhereUniqueWithoutDiscountInput.schema.d.ts.map