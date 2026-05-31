import * as z from 'zod';
// prettier-ignore
export const InvoiceResultSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    order: z.unknown(),
    invoiceNumber: z.string(),
    pdfUrl: z.string(),
    razorpayData: z.unknown().nullable(),
    createdAt: z.date()
}).strict();
//# sourceMappingURL=Invoice.result.js.map