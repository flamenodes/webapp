import * as z from 'zod';
export const ProductBillingOptionCreateResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.unknown(),
    billingPeriod: z.unknown(),
    price: z.number().int()
});
//# sourceMappingURL=ProductBillingOptionCreateResult.schema.js.map