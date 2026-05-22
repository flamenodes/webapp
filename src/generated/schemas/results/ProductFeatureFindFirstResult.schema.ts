import * as z from 'zod';
export const ProductFeatureFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  productId: z.string(),
  product: z.any(),
  label: z.string(),
  sortOrder: z.number().int()
}));