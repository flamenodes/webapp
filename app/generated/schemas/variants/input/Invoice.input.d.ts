import * as z from 'zod';
export declare const InvoiceInputSchema: z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    order: z.ZodUnknown;
    invoiceNumber: z.ZodString;
    pdfUrl: z.ZodString;
    razorpayData: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type InvoiceInputType = z.infer<typeof InvoiceInputSchema>;
//# sourceMappingURL=Invoice.input.d.ts.map