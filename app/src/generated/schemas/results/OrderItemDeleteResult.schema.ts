import * as z from 'zod';
import { OrderSchema } from '../models/Order.schema';
import { ProductSchema } from '../models/Product.schema';
import { ServerSchema } from '../models/Server.schema';
export const OrderItemDeleteResultSchema = z.nullable(z.object({
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
}));