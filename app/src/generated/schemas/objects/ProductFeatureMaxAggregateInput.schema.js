import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    label: z.literal(true).optional(),
    sortOrder: z.literal(true).optional()
}).strict();
export const ProductFeatureMaxAggregateInputObjectSchema = makeSchema();
export const ProductFeatureMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureMaxAggregateInput.schema.js.map