import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    label: z.literal(true).optional(),
    sortOrder: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const ProductFeatureCountAggregateInputObjectSchema = makeSchema();
export const ProductFeatureCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureCountAggregateInput.schema.js.map