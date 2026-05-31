import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductBillingOptionUpdateManyAndReturnArgs>;
export declare const ProductBillingOptionUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.ProductBillingOptionUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnProductBillingOption.schema.d.ts.map