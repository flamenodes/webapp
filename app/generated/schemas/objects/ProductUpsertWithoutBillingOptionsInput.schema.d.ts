import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductUpsertWithoutBillingOptionsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutBillingOptionsInput>;
export declare const ProductUpsertWithoutBillingOptionsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutBillingOptionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutBillingOptionsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCreateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateWithoutBillingOptionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateWithoutBillingOptionsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpsertWithoutBillingOptionsInput.schema.d.ts.map