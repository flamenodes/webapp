import * as z from 'zod';
export const ProductFeatureSchema = z.object({
    id: z.string(),
    productId: z.string(),
    label: z.string(),
    sortOrder: z.number().int(),
});
//# sourceMappingURL=ProductFeature.schema.js.map