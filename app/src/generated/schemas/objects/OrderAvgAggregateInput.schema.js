import * as z from 'zod';
const makeSchema = () => z.object({
    subtotalAmount: z.literal(true).optional(),
    discountAmount: z.literal(true).optional(),
    totalAmount: z.literal(true).optional()
}).strict();
export const OrderAvgAggregateInputObjectSchema = makeSchema();
export const OrderAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderAvgAggregateInput.schema.js.map