import * as z from 'zod';
const makeSchema = () => z.object({
    price: z.literal(true).optional(),
    sortOrder: z.literal(true).optional()
}).strict();
export const ProductAvgAggregateInputObjectSchema = makeSchema();
export const ProductAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductAvgAggregateInput.schema.js.map