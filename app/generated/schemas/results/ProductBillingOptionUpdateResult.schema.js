import * as z from 'zod';
export const ProductBillingOptionUpdateResultSchema = z.nullable(z.object({
    id: z.string(),
    productId: z.string(),
    product: z.unknown(),
    billingPeriod: z.unknown(),
    price: z.number().int()
}));
//# sourceMappingURL=ProductBillingOptionUpdateResult.schema.js.map