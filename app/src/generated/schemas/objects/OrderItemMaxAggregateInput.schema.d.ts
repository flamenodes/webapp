import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemMaxAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemMaxAggregateInputType>;
export declare const OrderItemMaxAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    orderId: z.ZodOptional<z.ZodLiteral<true>>;
    productId: z.ZodOptional<z.ZodLiteral<true>>;
    productName: z.ZodOptional<z.ZodLiteral<true>>;
    quantity: z.ZodOptional<z.ZodLiteral<true>>;
    billingPeriod: z.ZodOptional<z.ZodLiteral<true>>;
    unitPrice: z.ZodOptional<z.ZodLiteral<true>>;
    totalPrice: z.ZodOptional<z.ZodLiteral<true>>;
    expiresAt: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemMaxAggregateInput.schema.d.ts.map