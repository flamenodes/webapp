import * as z from 'zod';
const makeSchema = () => z.object({
    quantity: z.literal(true).optional()
}).strict();
export const CartItemAvgAggregateInputObjectSchema = makeSchema();
export const CartItemAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemAvgAggregateInput.schema.js.map