import * as z from 'zod';
import { InvoiceSelectObjectSchema as InvoiceSelectObjectSchema } from './objects/InvoiceSelect.schema';
import { InvoiceUpdateManyMutationInputObjectSchema as InvoiceUpdateManyMutationInputObjectSchema } from './objects/InvoiceUpdateManyMutationInput.schema';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema';
export const InvoiceUpdateManyAndReturnSchema = z.object({ select: InvoiceSelectObjectSchema.optional(), data: InvoiceUpdateManyMutationInputObjectSchema, where: InvoiceWhereInputObjectSchema.optional() }).strict();
export const InvoiceUpdateManyAndReturnZodSchema = z.object({ select: InvoiceSelectObjectSchema.optional(), data: InvoiceUpdateManyMutationInputObjectSchema, where: InvoiceWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnInvoice.schema.js.map