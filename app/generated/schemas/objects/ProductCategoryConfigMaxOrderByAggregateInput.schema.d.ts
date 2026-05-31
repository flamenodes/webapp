import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigMaxOrderByAggregateInput>;
export declare const ProductCategoryConfigMaxOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    category: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigMaxOrderByAggregateInput.schema.d.ts.map