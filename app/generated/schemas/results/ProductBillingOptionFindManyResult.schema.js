import * as z from 'zod';
export const ProductBillingOptionFindManyResultSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        productId: z.string(),
        product: z.unknown(),
        billingPeriod: z.unknown(),
        price: z.number().int()
    })),
    pagination: z.object({
        page: z.number().int().min(1),
        pageSize: z.number().int().min(1),
        total: z.number().int().min(0),
        totalPages: z.number().int().min(0),
        hasNext: z.boolean(),
        hasPrev: z.boolean()
    })
});
//# sourceMappingURL=ProductBillingOptionFindManyResult.schema.js.map