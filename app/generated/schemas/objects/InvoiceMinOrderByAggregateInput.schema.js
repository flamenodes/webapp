import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    orderId: SortOrderSchema.optional(),
    invoiceNumber: SortOrderSchema.optional(),
    pdfUrl: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional()
}).strict();
export const InvoiceMinOrderByAggregateInputObjectSchema = makeSchema();
export const InvoiceMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceMinOrderByAggregateInput.schema.js.map