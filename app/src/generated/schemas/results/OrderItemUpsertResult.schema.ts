import * as z from 'zod';
import { OrderSchema } from '../models/Order.schema';
import { ProductSchema } from '../models/Product.schema';
import { ServerSchema } from '../models/Server.schema';
export const OrderItemUpsertResultSchema = z.object({
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
});