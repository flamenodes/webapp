import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureMinOrderByAggregateInput>;
export declare const ProductFeatureMinOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    productId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    label: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureMinOrderByAggregateInput.schema.d.ts.map