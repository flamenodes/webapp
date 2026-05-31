import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionSumOrderByAggregateInput>;
export declare const ProductBillingOptionSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionSumOrderByAggregateInput.schema.d.ts.map