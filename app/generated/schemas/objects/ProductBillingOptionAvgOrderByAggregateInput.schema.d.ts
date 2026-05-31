import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionAvgOrderByAggregateInput>;
export declare const ProductBillingOptionAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionAvgOrderByAggregateInput.schema.d.ts.map