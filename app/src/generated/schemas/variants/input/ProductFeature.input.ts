import * as z from 'zod';
// prettier-ignore
export const ProductFeatureInputSchema = z.object({
    id: z.string(),
    productId: z.string(),
    label: z.string(),
    sortOrder: z.number().int(),
    product: z.any()
}).strict();

export type ProductFeatureInputType = z.infer<typeof ProductFeatureInputSchema>;
