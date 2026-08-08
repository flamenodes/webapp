import * as z from 'zod';
import { OrderSchema } from '../models/Order.schema';
import { ProductSchema } from '../models/Product.schema';
import { ServerSchema } from '../models/Server.schema';
export const OrderItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
  billingPeriod: z.any(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  productName: z.string(),
  specsSnapshot: z.any().optional(),
  totalPrice: z.number().int(),
  unitPrice: z.number().int(),
  configuration: z.any().optional(),
  order: OrderSchema.optional(),
  product: ProductSchema.optional(),
  server: ServerSchema.optional()
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