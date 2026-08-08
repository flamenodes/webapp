import * as z from 'zod';
export const InvoiceAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    orderId: z.number(),
    invoiceNumber: z.number(),
    pdfUrl: z.number(),
    razorpayData: z.number(),
    createdAt: z.number(),
    order: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    invoiceNumber: z.string().nullable(),
    pdfUrl: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    invoiceNumber: z.string().nullable(),
    pdfUrl: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
  }).nullable().optional()});