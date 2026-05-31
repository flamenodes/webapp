import * as z from 'zod';
export declare const InvoiceCreateResultSchema: z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    order: z.ZodUnknown;
    invoiceNumber: z.ZodString;
    pdfUrl: z.ZodString;
    razorpayData: z.ZodOptional<z.ZodUnknown>;
    createdAt: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=InvoiceCreateResult.schema.d.ts.map