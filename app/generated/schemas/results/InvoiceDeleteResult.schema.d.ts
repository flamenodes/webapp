import * as z from 'zod';
export declare const InvoiceDeleteResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    order: z.ZodUnknown;
    invoiceNumber: z.ZodString;
    pdfUrl: z.ZodString;
    razorpayData: z.ZodOptional<z.ZodUnknown>;
    createdAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=InvoiceDeleteResult.schema.d.ts.map