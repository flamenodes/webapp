import * as z from 'zod';
export const ProductFeatureUpsertResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.any(),
    label: z.string(),
    sortOrder: z.number().int()
});
//# sourceMappingURL=ProductFeatureUpsertResult.schema.js.map