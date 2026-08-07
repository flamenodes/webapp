import * as z from 'zod';
import { ProductSchema } from '../models/Product.schema';
export const DiscountCreateResultSchema = z.object({
  id: z.string(),
  label: z.string(),
  percentage: z.number().int(),
  product: z.array(ProductSchema).optional()
});