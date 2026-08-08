import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const ProductFeatureUpsertResultSchema = z.object({
  id: z.string(),
  productId: z.string(),
  label: z.string(),
  sortOrder: z.number().int(),
  product: ProductSchema.optional()
});