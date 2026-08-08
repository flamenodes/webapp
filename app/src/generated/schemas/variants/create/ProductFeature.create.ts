import * as z from 'zod';
// prettier-ignore
export const ProductFeatureCreateSchema = z.object({
    id: z.string(),
    productId: z.string(),
    label: z.string(),
    sortOrder: z.number().int(),
    product: z.any()
}).strict();

export type ProductFeatureCreateType = z.infer<typeof ProductFeatureCreateSchema>;
