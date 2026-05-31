import * as z from 'zod';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    orderId: z.boolean().optional(),
    order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
    invoiceNumber: z.boolean().optional(),
    pdfUrl: z.boolean().optional(),
    razorpayData: z.boolean().optional(),
    createdAt: z.boolean().optional()
}).strict();
export const InvoiceSelectObjectSchema = makeSchema();
export const InvoiceSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceSelect.schema.js.map