import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
import { OrderItemSchema } from '../models/OrderItem.schema';
import { InvoiceSchema } from '../models/Invoice.schema';
export const OrderFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  user: UserSchema.optional(),
  status: z.any(),
  subtotalAmount: z.number().int(),
  discountAmount: z.number().int(),
  totalAmount: z.number().int(),
  couponCode: z.string().optional(),
  deliveryMessage: z.string().optional(),
  deliveryData: z.any().optional(),
  items: z.array(OrderItemSchema).optional(),
  invoice: InvoiceSchema.optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});