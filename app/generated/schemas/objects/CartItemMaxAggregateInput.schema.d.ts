import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemMaxAggregateInputObjectSchema: z.ZodType<Prisma.CartItemMaxAggregateInputType>;
export declare const CartItemMaxAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    cartId: z.ZodOptional<z.ZodLiteral<true>>;
    productId: z.ZodOptional<z.ZodLiteral<true>>;
    quantity: z.ZodOptional<z.ZodLiteral<true>>;
    billingPeriod: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemMaxAggregateInput.schema.d.ts.map