import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemAvgAggregateInputType>;
export declare const OrderItemAvgAggregateInputObjectZodSchema: z.ZodObject<{
    quantity: z.ZodOptional<z.ZodLiteral<true>>;
    unitPrice: z.ZodOptional<z.ZodLiteral<true>>;
    totalPrice: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemAvgAggregateInput.schema.d.ts.map