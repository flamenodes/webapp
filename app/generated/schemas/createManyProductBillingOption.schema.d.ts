import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductBillingOptionCreateManySchema: z.ZodType<Prisma.ProductBillingOptionCreateManyArgs>;
export declare const ProductBillingOptionCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductBillingOptionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductBillingOptionCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyProductBillingOption.schema.d.ts.map