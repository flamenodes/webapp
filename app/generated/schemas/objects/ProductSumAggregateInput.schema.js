import * as z from 'zod';
const makeSchema = () => z.object({
    price: z.literal(true).optional(),
    sortOrder: z.literal(true).optional()
}).strict();
export const ProductSumAggregateInputObjectSchema = makeSchema();
export const ProductSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductSumAggregateInput.schema.js.map