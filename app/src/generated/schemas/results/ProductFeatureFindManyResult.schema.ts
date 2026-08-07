import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const ProductFeatureFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  productId: z.string(),
  product: ProductSchema.optional(),
  label: z.string(),
  sortOrder: z.number().int()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});