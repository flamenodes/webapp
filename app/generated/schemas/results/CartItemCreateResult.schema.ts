import * as z from 'zod';
export const CartItemCreateResultSchema = z.object({
  id: z.string(),
  cartId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  billingPeriod: z.unknown(),
  configuration: z.unknown().optional(),
  cart: z.unknown().optional(),
  product: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});