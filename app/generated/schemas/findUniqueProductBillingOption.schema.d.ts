import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionFindUniqueSchema: z.ZodType<Prisma.ProductBillingOptionFindUniqueArgs>;
export declare const ProductBillingOptionFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueProductBillingOption.schema.d.ts.map