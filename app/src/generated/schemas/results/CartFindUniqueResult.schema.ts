import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
import { CartItemSchema } from '../models/CartItem.schema';
export const CartFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: UserSchema.optional(),
  items: z.array(CartItemSchema).optional(),
  couponCode: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));