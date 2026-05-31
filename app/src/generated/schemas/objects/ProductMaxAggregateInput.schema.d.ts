import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProductMaxAggregateInputType>;
export declare const ProductMaxAggregateInputObjectZodSchema: z.ZodObject<{
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
    deployMode: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductMaxAggregateInput.schema.d.ts.map