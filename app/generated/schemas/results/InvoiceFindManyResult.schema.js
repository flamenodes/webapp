import * as z from 'zod';
export const InvoiceFindManyResultSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        orderId: z.string(),
        order: z.unknown(),
        invoiceNumber: z.string(),
        pdfUrl: z.string(),
        razorpayData: z.unknown().optional(),
        createdAt: z.date()
    })),
    pagination: z.object({
        page: z.number().int().min(1),
        pageSize: z.number().int().min(1),
        total: z.number().int().min(0),
        totalPages: z.number().int().min(0),
        hasNext: z.boolean(),
        hasPrev: z.boolean()
    })
});
//# sourceMappingURL=InvoiceFindManyResult.schema.js.map