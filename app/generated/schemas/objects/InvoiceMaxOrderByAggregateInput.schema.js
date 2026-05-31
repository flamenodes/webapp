import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    orderId: SortOrderSchema.optional(),
    invoiceNumber: SortOrderSchema.optional(),
    pdfUrl: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional()
}).strict();
export const InvoiceMaxOrderByAggregateInputObjectSchema = makeSchema();
export const InvoiceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceMaxOrderByAggregateInput.schema.js.map