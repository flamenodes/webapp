import * as z from 'zod';
export const CartUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  items: z.array(z.unknown()),
  couponCode: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));