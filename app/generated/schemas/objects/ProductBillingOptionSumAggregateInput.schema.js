import * as z from 'zod';
const makeSchema = () => z.object({
    price: z.literal(true).optional()
}).strict();
export const ProductBillingOptionSumAggregateInputObjectSchema = makeSchema();
export const ProductBillingOptionSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionSumAggregateInput.schema.js.map