import * as z from 'zod';
export declare const InvoiceModelSchema: z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    order: z.ZodUnknown;
    invoiceNumber: z.ZodString;
    pdfUrl: z.ZodString;
    razorpayData: z.ZodNullable<z.ZodUnknown>;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type InvoicePureType = z.infer<typeof InvoiceModelSchema>;
//# sourceMappingURL=Invoice.pure.d.ts.map