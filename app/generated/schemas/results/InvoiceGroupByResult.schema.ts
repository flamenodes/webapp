import * as z from 'zod';
export const InvoiceGroupByResultSchema = z.array(z.object({
  id: z.string(),
  orderId: z.string(),
  invoiceNumber: z.string(),
  pdfUrl: z.string(),
  razorpayData: z.unknown(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    orderId: z.number(),
    order: z.number(),
    invoiceNumber: z.number(),
    pdfUrl: z.number(),
    razorpayData: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    invoiceNumber: z.string().nullable(),
    pdfUrl: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    invoiceNumber: z.string().nullable(),
    pdfUrl: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));