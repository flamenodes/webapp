import * as z from 'zod';
export declare const InvoiceFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        orderId: z.ZodString;
        order: z.ZodUnknown;
        invoiceNumber: z.ZodString;
        pdfUrl: z.ZodString;
        razorpayData: z.ZodOptional<z.ZodUnknown>;
        createdAt: z.ZodDate;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=InvoiceFindManyResult.schema.d.ts.map