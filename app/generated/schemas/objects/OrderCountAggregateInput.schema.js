import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    status: z.literal(true).optional(),
    subtotalAmount: z.literal(true).optional(),
    discountAmount: z.literal(true).optional(),
    totalAmount: z.literal(true).optional(),
    couponCode: z.literal(true).optional(),
    deliveryMessage: z.literal(true).optional(),
    deliveryData: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const OrderCountAggregateInputObjectSchema = makeSchema();
export const OrderCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderCountAggregateInput.schema.js.map