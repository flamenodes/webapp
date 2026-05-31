import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    orderId: SortOrderSchema.optional(),
    invoiceNumber: SortOrderSchema.optional(),
    pdfUrl: SortOrderSchema.optional(),
    razorpayData: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional()
}).strict();
export const InvoiceCountOrderByAggregateInputObjectSchema = makeSchema();
export const InvoiceCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceCountOrderByAggregateInput.schema.js.map