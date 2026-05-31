import * as z from 'zod';
// prettier-ignore
export const ProductFeatureResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.unknown(),
    label: z.string(),
    sortOrder: z.number().int()
}).strict();
//# sourceMappingURL=ProductFeature.result.js.map