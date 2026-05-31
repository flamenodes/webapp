import * as z from 'zod';
export declare const InvoiceFindUniqueResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    order: z.ZodUnknown;
    invoiceNumber: z.ZodString;
    pdfUrl: z.ZodString;
    razorpayData: z.ZodOptional<z.ZodUnknown>;
    createdAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=InvoiceFindUniqueResult.schema.d.ts.map