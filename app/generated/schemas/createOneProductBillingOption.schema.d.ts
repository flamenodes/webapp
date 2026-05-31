import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionCreateOneSchema: z.ZodType<Prisma.ProductBillingOptionCreateArgs>;
export declare const ProductBillingOptionCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateInput, unknown>>, z.ZodType<Prisma.ProductBillingOptionUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneProductBillingOption.schema.d.ts.map