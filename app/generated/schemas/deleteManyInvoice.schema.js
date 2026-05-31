import * as z from 'zod';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema';
export const InvoiceDeleteManySchema = z.object({ where: InvoiceWhereInputObjectSchema.optional() }).strict();
export const InvoiceDeleteManyZodSchema = z.object({ where: InvoiceWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyInvoice.schema.js.map