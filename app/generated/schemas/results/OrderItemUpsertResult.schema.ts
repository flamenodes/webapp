import * as z from 'zod';
export const OrderItemUpsertResultSchema = z.object({
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
  order: z.unknown(),
  product: z.unknown(),
  server: z.unknown().optional(),
  createdAt: z.date()
});