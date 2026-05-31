import * as z from 'zod';
import { InvoiceUpdateManyMutationInputObjectSchema as InvoiceUpdateManyMutationInputObjectSchema } from './objects/InvoiceUpdateManyMutationInput.schema';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema';
export const InvoiceUpdateManySchema = z.object({ data: InvoiceUpdateManyMutationInputObjectSchema, where: InvoiceWhereInputObjectSchema.optional() }).strict();
export const InvoiceUpdateManyZodSchema = z.object({ data: InvoiceUpdateManyMutationInputObjectSchema, where: InvoiceWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyInvoice.schema.js.map