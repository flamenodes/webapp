import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigCountAggregateInputType>;
export declare const ProductCategoryConfigCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    category: z.ZodOptional<z.ZodLiteral<true>>;
    billingPeriods: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigCountAggregateInput.schema.d.ts.map