import * as z from 'zod';
import { CartSchema } from '../models/Cart.schema';
import { ProductSchema } from '../models/Product.schema';
export const CartItemFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  cartId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  billingPeriod: z.any(),
  configuration: z.any().optional(),
  cart: CartSchema.optional(),
  product: ProductSchema.optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));