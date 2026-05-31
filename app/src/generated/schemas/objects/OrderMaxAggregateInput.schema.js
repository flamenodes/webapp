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
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const OrderMaxAggregateInputObjectSchema = makeSchema();
export const OrderMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderMaxAggregateInput.schema.js.map