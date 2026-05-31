import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemMinAggregateInputObjectSchema: z.ZodType<Prisma.CartItemMinAggregateInputType>;
export declare const CartItemMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    cartId: z.ZodOptional<z.ZodLiteral<true>>;
    productId: z.ZodOptional<z.ZodLiteral<true>>;
    quantity: z.ZodOptional<z.ZodLiteral<true>>;
    billingPeriod: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemMinAggregateInput.schema.d.ts.map