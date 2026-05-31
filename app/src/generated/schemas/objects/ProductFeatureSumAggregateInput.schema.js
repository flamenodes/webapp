import * as z from 'zod';
const makeSchema = () => z.object({
    sortOrder: z.literal(true).optional()
}).strict();
export const ProductFeatureSumAggregateInputObjectSchema = makeSchema();
export const ProductFeatureSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureSumAggregateInput.schema.js.map