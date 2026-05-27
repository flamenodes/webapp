import * as z from 'zod';

export const ProductFeatureSchema = z.object({
  id: z.string(),
  productId: z.string(),
  label: z.string(),
  sortOrder: z.number().int(),
});

export type ProductFeatureType = z.infer<typeof ProductFeatureSchema>;
