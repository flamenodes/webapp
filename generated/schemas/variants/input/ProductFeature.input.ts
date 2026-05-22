import * as z from 'zod';
// prettier-ignore
export const ProductFeatureInputSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.unknown(),
    label: z.string(),
    sortOrder: z.number().int()
}).strict();

export type ProductFeatureInputType = z.infer<typeof ProductFeatureInputSchema>;
