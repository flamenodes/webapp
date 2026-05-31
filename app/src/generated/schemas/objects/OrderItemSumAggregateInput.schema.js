import * as z from 'zod';
const makeSchema = () => z.object({
    quantity: z.literal(true).optional(),
    unitPrice: z.literal(true).optional(),
    totalPrice: z.literal(true).optional()
}).strict();
export const OrderItemSumAggregateInputObjectSchema = makeSchema();
export const OrderItemSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemSumAggregateInput.schema.js.map