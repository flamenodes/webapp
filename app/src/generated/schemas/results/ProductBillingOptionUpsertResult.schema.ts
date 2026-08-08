import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const ProductBillingOptionUpsertResultSchema = z.object({
  id: z.string(),
  productId: z.string(),
  billingPeriod: z.any(),
  price: z.number().int(),
  customDays: z.number().int().optional(),
  product: ProductSchema.optional()
});