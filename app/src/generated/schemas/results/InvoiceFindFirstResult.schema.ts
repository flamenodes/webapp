import * as z from 'zod';
import { OrderSchema } from '../models/Order.schema';
export const InvoiceFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  orderId: z.string(),
  invoiceNumber: z.string(),
  pdfUrl: z.string(),
  razorpayData: z.any().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  order: OrderSchema.optional()
}));