import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const ProductFeatureUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  productId: z.string(),
  product: ProductSchema.optional(),
  label: z.string(),
  sortOrder: z.number().int()
}));