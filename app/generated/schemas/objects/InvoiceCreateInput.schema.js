import * as z from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderCreateNestedOneWithoutInvoiceInputObjectSchema as OrderCreateNestedOneWithoutInvoiceInputObjectSchema } from './OrderCreateNestedOneWithoutInvoiceInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    invoiceNumber: z.string(),
    pdfUrl: z.string(),
    razorpayData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    createdAt: z.coerce.date().optional(),
    order: z.lazy(() => OrderCreateNestedOneWithoutInvoiceInputObjectSchema)
}).strict();
export const InvoiceCreateInputObjectSchema = makeSchema();
export const InvoiceCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceCreateInput.schema.js.map