import * as z from 'zod';
export const ProductFeatureUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  productId: z.string(),
  product: z.unknown().optional(),
  label: z.string(),
  sortOrder: z.number().int()
}));