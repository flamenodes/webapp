import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    orderId: z.literal(true).optional(),
    invoiceNumber: z.literal(true).optional(),
    pdfUrl: z.literal(true).optional(),
    razorpayData: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const InvoiceCountAggregateInputObjectSchema = makeSchema();
export const InvoiceCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceCountAggregateInput.schema.js.map