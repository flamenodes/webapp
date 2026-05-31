import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    category: z.literal(true).optional(),
    billingPeriods: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const ProductCategoryConfigCountAggregateInputObjectSchema = makeSchema();
export const ProductCategoryConfigCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigCountAggregateInput.schema.js.map