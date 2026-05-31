import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureMaxAggregateInputType>;
export declare const ProductFeatureMaxAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    productId: z.ZodOptional<z.ZodLiteral<true>>;
    label: z.ZodOptional<z.ZodLiteral<true>>;
    sortOrder: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureMaxAggregateInput.schema.d.ts.map