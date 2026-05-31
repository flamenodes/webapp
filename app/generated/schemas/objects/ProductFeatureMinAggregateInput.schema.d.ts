import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductFeatureMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureMinAggregateInputType>;
export declare const ProductFeatureMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    productId: z.ZodOptional<z.ZodLiteral<true>>;
    label: z.ZodOptional<z.ZodLiteral<true>>;
    sortOrder: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureMinAggregateInput.schema.d.ts.map