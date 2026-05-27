import * as z from 'zod';
// prettier-ignore
export const ProductFeatureResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.any(),
    label: z.string(),
    sortOrder: z.number().int()
}).strict();

export type ProductFeatureResultType = z.infer<typeof ProductFeatureResultSchema>;
