import * as z from 'zod';
// prettier-ignore
export const InvoiceModelSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    order: z.unknown(),
    invoiceNumber: z.string(),
    pdfUrl: z.string(),
    razorpayData: z.unknown().nullable(),
    createdAt: z.date()
}).strict();

export type InvoicePureType = z.infer<typeof InvoiceModelSchema>;
