import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const ProductBillingOptionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  productId: z.string(),
  product: ProductSchema.optional(),
  billingPeriod: z.any(),
  price: z.number().int(),
  customDays: z.number().int().optional()
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