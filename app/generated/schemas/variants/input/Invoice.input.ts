import * as z from 'zod';
// prettier-ignore
export const InvoiceInputSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    order: z.unknown(),
    invoiceNumber: z.string(),
    pdfUrl: z.string(),
    razorpayData: z.unknown().optional().nullable(),
    createdAt: z.date()
}).strict();

export type InvoiceInputType = z.infer<typeof InvoiceInputSchema>;
