import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUpdateWithWhereUniqueWithoutProductInput>;
export declare const ProductBillingOptionUpdateWithWhereUniqueWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUncheckedUpdateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionUpdateWithWhereUniqueWithoutProductInput.schema.d.ts.map