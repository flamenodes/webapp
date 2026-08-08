import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';

export const OrderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  totalAmount: z.number().int(),
  status: OrderStatusSchema.default("PENDING"),
  deliveryMessage: z.string().nullish(),
  deliveryData: z.any().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  couponCode: z.string().nullish(),
  discountAmount: z.number().int(),
  subtotalAmount: z.number().int(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  renewalForServerId: z.string().nullish(),
});

export type OrderType = z.infer<typeof OrderSchema>;
