import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductUpdateToOneWithWhereWithoutBillingOptionsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutBillingOptionsInput>;
export declare const ProductUpdateToOneWithWhereWithoutBillingOptionsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductUpdateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateWithoutBillingOptionsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductUncheckedUpdateWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateWithoutBillingOptionsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductUpdateToOneWithWhereWithoutBillingOptionsInput.schema.d.ts.map