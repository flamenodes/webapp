import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrderOrderByWithRelationInputObjectSchema as OrderOrderByWithRelationInputObjectSchema } from './OrderOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    orderId: SortOrderSchema.optional(),
    invoiceNumber: SortOrderSchema.optional(),
    pdfUrl: SortOrderSchema.optional(),
    razorpayData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: SortOrderSchema.optional(),
    order: z.lazy(() => OrderOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const InvoiceOrderByWithRelationInputObjectSchema = makeSchema();
export const InvoiceOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceOrderByWithRelationInput.schema.js.map