import * as z from 'zod';
import { InvoiceSchema } from '../models/Invoice.schema';
import { ServerSchema } from '../models/Server.schema';
import { UserSchema } from '../models/User.schema';
import { OrderItemSchema } from '../models/OrderItem.schema';
export const OrderUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  totalAmount: z.number().int(),
  status: z.any(),
  deliveryMessage: z.string().optional(),
  deliveryData: z.any().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  couponCode: z.string().optional(),
  discountAmount: z.number().int(),
  subtotalAmount: z.number().int(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  invoice: InvoiceSchema.optional(),
  renewalForServerId: z.string().optional(),
  renewalForServer: ServerSchema.optional(),
  user: UserSchema.optional(),
  items: z.array(OrderItemSchema).optional()
}));