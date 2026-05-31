import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemCountAggregateInputObjectSchema: z.ZodType<Prisma.CartItemCountAggregateInputType>;
export declare const CartItemCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    cartId: z.ZodOptional<z.ZodLiteral<true>>;
    productId: z.ZodOptional<z.ZodLiteral<true>>;
    quantity: z.ZodOptional<z.ZodLiteral<true>>;
    billingPeriod: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemCountAggregateInput.schema.d.ts.map