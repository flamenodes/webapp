import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductFeatureAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureAvgOrderByAggregateInput>;
export declare const ProductFeatureAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureAvgOrderByAggregateInput.schema.d.ts.map