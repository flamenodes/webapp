import * as z from 'zod';
const makeSchema = () => z.object({
    sortOrder: z.literal(true).optional()
}).strict();
export const ProductFeatureAvgAggregateInputObjectSchema = makeSchema();
export const ProductFeatureAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureAvgAggregateInput.schema.js.map