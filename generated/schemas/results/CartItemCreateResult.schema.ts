import * as z from 'zod';
export const CartItemCreateResultSchema = z.object({
  id: z.string(),
  cartId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  billingPeriod: z.unknown(),
  cart: z.unknown(),
  product: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});