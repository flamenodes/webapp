import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    orderId: z.literal(true).optional(),
    invoiceNumber: z.literal(true).optional(),
    pdfUrl: z.literal(true).optional(),
    createdAt: z.literal(true).optional()
}).strict();
export const InvoiceMinAggregateInputObjectSchema = makeSchema();
export const InvoiceMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceMinAggregateInput.schema.js.map