import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionUpdateOneSchema: z.ZodType<Prisma.ProductBillingOptionUpdateArgs>;
export declare const ProductBillingOptionUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUpdateInput, unknown>>, z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneProductBillingOption.schema.d.ts.map