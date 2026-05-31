import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    category: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const ProductCategoryConfigMinAggregateInputObjectSchema = makeSchema();
export const ProductCategoryConfigMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigMinAggregateInput.schema.js.map