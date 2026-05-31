import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    orderId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    productName: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    billingPeriod: z.literal(true).optional(),
    unitPrice: z.literal(true).optional(),
    totalPrice: z.literal(true).optional(),
    specsSnapshot: z.literal(true).optional(),
    configuration: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const OrderItemCountAggregateInputObjectSchema = makeSchema();
export const OrderItemCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemCountAggregateInput.schema.js.map