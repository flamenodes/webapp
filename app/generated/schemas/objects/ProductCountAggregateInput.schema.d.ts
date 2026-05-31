import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductCountAggregateInputType>;
export declare const ProductCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    planName: z.ZodOptional<z.ZodLiteral<true>>;
    icon: z.ZodOptional<z.ZodLiteral<true>>;
    badge: z.ZodOptional<z.ZodLiteral<true>>;
    category: z.ZodOptional<z.ZodLiteral<true>>;
    price: z.ZodOptional<z.ZodLiteral<true>>;
    sortOrder: z.ZodOptional<z.ZodLiteral<true>>;
    featureCategory: z.ZodOptional<z.ZodLiteral<true>>;
    inStock: z.ZodOptional<z.ZodLiteral<true>>;
    discountId: z.ZodOptional<z.ZodLiteral<true>>;
    specs: z.ZodOptional<z.ZodLiteral<true>>;
    deployMode: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCountAggregateInput.schema.d.ts.map