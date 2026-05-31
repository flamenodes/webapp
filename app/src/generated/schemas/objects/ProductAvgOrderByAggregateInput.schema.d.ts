import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput>;
export declare const ProductAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductAvgOrderByAggregateInput.schema.d.ts.map