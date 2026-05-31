import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductFeatureSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureSumOrderByAggregateInput>;
export declare const ProductFeatureSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    sortOrder: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureSumOrderByAggregateInput.schema.d.ts.map