import * as z from 'zod';
const makeSchema = () => z.object({
    quantity: z.literal(true).optional()
}).strict();
export const CartItemSumAggregateInputObjectSchema = makeSchema();
export const CartItemSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemSumAggregateInput.schema.js.map