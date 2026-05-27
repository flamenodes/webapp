import * as z from 'zod';
export const ProductFeatureCreateResultSchema = z.object({
  id: z.string(),
  productId: z.string(),
  product: z.unknown(),
  label: z.string(),
  sortOrder: z.number().int()
});