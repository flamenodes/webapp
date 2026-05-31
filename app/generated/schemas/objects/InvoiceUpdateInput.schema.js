import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OrderUpdateOneRequiredWithoutInvoiceNestedInputObjectSchema as OrderUpdateOneRequiredWithoutInvoiceNestedInputObjectSchema } from './OrderUpdateOneRequiredWithoutInvoiceNestedInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    invoiceNumber: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    pdfUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    razorpayData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    order: z.lazy(() => OrderUpdateOneRequiredWithoutInvoiceNestedInputObjectSchema).optional()
}).strict();
export const InvoiceUpdateInputObjectSchema = makeSchema();
export const InvoiceUpdateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceUpdateInput.schema.js.map