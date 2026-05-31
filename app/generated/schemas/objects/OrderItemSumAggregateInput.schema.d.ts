import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemSumAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemSumAggregateInputType>;
export declare const OrderItemSumAggregateInputObjectZodSchema: z.ZodObject<{
    quantity: z.ZodOptional<z.ZodLiteral<true>>;
    unitPrice: z.ZodOptional<z.ZodLiteral<true>>;
    totalPrice: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemSumAggregateInput.schema.d.ts.map