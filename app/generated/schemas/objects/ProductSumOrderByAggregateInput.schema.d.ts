import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput>;
export declare const ProductSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductSumOrderByAggregateInput.schema.d.ts.map