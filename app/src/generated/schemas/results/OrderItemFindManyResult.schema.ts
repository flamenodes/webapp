import * as z from 'zod';
import { OrderSchema } from '../models/Order.schema';
import { ProductSchema } from '../models/Product.schema';
import { ServerSchema } from '../models/Server.schema';
export const OrderItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
  productName: z.string(),
  quantity: z.number().int(),
  billingPeriod: z.any(),
  unitPrice: z.number().int(),
  totalPrice: z.number().int(),
  specsSnapshot: z.any().optional(),
  configuration: z.any().optional(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
  order: OrderSchema.optional(),
  product: ProductSchema.optional(),
  server: ServerSchema.optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
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