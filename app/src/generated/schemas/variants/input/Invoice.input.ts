import * as z from 'zod';
// prettier-ignore
export const InvoiceInputSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    invoiceNumber: z.string(),
    pdfUrl: z.string(),
    razorpayData: z.any().optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    order: z.any()
}).strict();

export type InvoiceInputType = z.infer<typeof InvoiceInputSchema>;
