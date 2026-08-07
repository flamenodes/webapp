import * as z from 'zod';
export const OrderItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
  productName: z.string(),
  quantity: z.number().int(),
  billingPeriod: z.unknown(),
  unitPrice: z.number().int(),
  totalPrice: z.number().int(),
  specsSnapshot: z.unknown().optional(),
  configuration: z.unknown().optional(),
  expiresAt: z.date().optional(),
  order: z.unknown().optional(),
  product: z.unknown().optional(),
  server: z.unknown().optional(),
  createdAt: z.date()
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