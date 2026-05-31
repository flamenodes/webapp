import * as z from 'zod';
export const InvoiceDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  orderId: z.string(),
  order: z.unknown(),
  invoiceNumber: z.string(),
  pdfUrl: z.string(),
  razorpayData: z.unknown().optional(),
  createdAt: z.date()
}));