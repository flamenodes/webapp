import * as z from 'zod';
export const OrderDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown().optional(),
  status: z.unknown(),
  subtotalAmount: z.number().int(),
  discountAmount: z.number().int(),
  totalAmount: z.number().int(),
  couponCode: z.string().optional(),
  deliveryMessage: z.string().optional(),
  deliveryData: z.unknown().optional(),
  items: z.array(z.unknown()).optional(),
  invoice: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));