import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductFeatureCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureCountOrderByAggregateInput>;
export declare const ProductFeatureCountOrderByAggregateInputObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=ProductFeatureCountOrderByAggregateInput.schema.d.ts.map