import * as z from 'zod';
export declare const InvoiceResultSchema: z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    order: z.ZodUnknown;
    invoiceNumber: z.ZodString;
    pdfUrl: z.ZodString;
    razorpayData: z.ZodNullable<z.ZodUnknown>;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type InvoiceResultType = z.infer<typeof InvoiceResultSchema>;
//# sourceMappingURL=Invoice.result.d.ts.map