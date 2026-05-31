import * as z from 'zod';
export const ProductBillingOptionUpsertResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.unknown(),
    billingPeriod: z.unknown(),
    price: z.number().int()
});
//# sourceMappingURL=ProductBillingOptionUpsertResult.schema.js.map