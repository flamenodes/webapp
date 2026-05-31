import * as z from 'zod';
const makeSchema = () => z.object({
    price: z.literal(true).optional()
}).strict();
export const ProductBillingOptionAvgAggregateInputObjectSchema = makeSchema();
export const ProductBillingOptionAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionAvgAggregateInput.schema.js.map