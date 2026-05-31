import * as z from 'zod';
const makeSchema = () => z.object({
    subtotalAmount: z.literal(true).optional(),
    discountAmount: z.literal(true).optional(),
    totalAmount: z.literal(true).optional()
}).strict();
export const OrderSumAggregateInputObjectSchema = makeSchema();
export const OrderSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderSumAggregateInput.schema.js.map