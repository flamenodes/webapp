import * as z from 'zod';
// prettier-ignore
export const ProductFeatureResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    label: z.string(),
    sortOrder: z.number().int(),
    product: z.any()
}).strict();

export type ProductFeatureResultType = z.infer<typeof ProductFeatureResultSchema>;
