import * as z from 'zod';
// prettier-ignore
export const ProductFeatureCreateSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.any(),
    label: z.string(),
    sortOrder: z.number().int()
}).strict();

export type ProductFeatureCreateType = z.infer<typeof ProductFeatureCreateSchema>;
