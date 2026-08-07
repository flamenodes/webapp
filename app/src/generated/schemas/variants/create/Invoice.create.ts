import * as z from 'zod';
// prettier-ignore
export const InvoiceCreateSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    order: z.any(),
    invoiceNumber: z.string(),
    pdfUrl: z.string(),
    razorpayData: z.any().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type InvoiceCreateType = z.infer<typeof InvoiceCreateSchema>;
