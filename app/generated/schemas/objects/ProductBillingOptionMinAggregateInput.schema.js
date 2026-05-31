import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    billingPeriod: z.literal(true).optional(),
    price: z.literal(true).optional()
}).strict();
export const ProductBillingOptionMinAggregateInputObjectSchema = makeSchema();
export const ProductBillingOptionMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionMinAggregateInput.schema.js.map