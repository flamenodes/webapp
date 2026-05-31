import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    billingPeriod: z.literal(true).optional(),
    price: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const ProductBillingOptionCountAggregateInputObjectSchema = makeSchema();
export const ProductBillingOptionCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionCountAggregateInput.schema.js.map