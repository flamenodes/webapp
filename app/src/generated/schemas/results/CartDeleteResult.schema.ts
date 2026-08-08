import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
import { CartItemSchema } from '../models/CartItem.schema';
export const CartDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  couponCode: z.string().optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  user: UserSchema.optional(),
  items: z.array(CartItemSchema).optional()
}));