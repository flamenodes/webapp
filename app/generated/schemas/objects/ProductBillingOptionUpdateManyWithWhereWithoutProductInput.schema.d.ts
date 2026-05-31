import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUpdateManyWithWhereWithoutProductInput>;
export declare const ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateManyWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUncheckedUpdateManyWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionUpdateManyWithWhereWithoutProductInput.schema.d.ts.map