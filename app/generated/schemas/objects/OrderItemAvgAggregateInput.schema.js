import * as z from 'zod';
const makeSchema = () => z.object({
    quantity: z.literal(true).optional(),
    unitPrice: z.literal(true).optional(),
    totalPrice: z.literal(true).optional()
}).strict();
export const OrderItemAvgAggregateInputObjectSchema = makeSchema();
export const OrderItemAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemAvgAggregateInput.schema.js.map