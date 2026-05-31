import * as z from 'zod';
export declare const InvoiceAggregateResultSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        orderId: z.ZodNumber;
        order: z.ZodNumber;
        invoiceNumber: z.ZodNumber;
        pdfUrl: z.ZodNumber;
        razorpayData: z.ZodNumber;
        createdAt: z.ZodNumber;
    }, z.core.$strip>>;
    _min: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        orderId: z.ZodNullable<z.ZodString>;
        invoiceNumber: z.ZodNullable<z.ZodString>;
        pdfUrl: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodDate>;
    }, z.core.$strip>>>;
    _max: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        orderId: z.ZodNullable<z.ZodString>;
        invoiceNumber: z.ZodNullable<z.ZodString>;
        pdfUrl: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodDate>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
//# sourceMappingURL=InvoiceAggregateResult.schema.d.ts.map