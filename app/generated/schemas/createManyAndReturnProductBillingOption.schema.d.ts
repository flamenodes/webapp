import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionCreateManyAndReturnSchema: z.ZodType<Prisma.ProductBillingOptionCreateManyAndReturnArgs>;
export declare const ProductBillingOptionCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductBillingOptionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnProductBillingOption.schema.d.ts.map