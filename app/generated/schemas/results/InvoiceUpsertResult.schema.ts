import * as z from 'zod';
export const InvoiceUpsertResultSchema = z.object({
  id: z.string(),
  orderId: z.string(),
  order: z.unknown().optional(),
  invoiceNumber: z.string(),
  pdfUrl: z.string(),
  razorpayData: z.unknown().optional(),
  createdAt: z.date()
});