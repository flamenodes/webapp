import * as z from 'zod';
import { OrderItemSchema } from '../models/OrderItem.schema';
import { UserSchema } from '../models/User.schema';
import { OrderSchema } from '../models/Order.schema';
export const ServerDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  orderItemId: z.string().optional(),
  name: z.string(),
  type: z.string(),
  status: z.string(),
  ip: z.string().optional(),
  port: z.number().int().optional(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
  resources: z.any().optional(),
  pterodactylData: z.any().optional(),
  suspended: z.boolean(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  pterodactylServerId: z.number().int().optional(),
  orderItem: OrderItemSchema.optional(),
  user: UserSchema.optional(),
  renewals: z.array(OrderSchema).optional()
}));