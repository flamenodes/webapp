import * as z from 'zod';
import { InvoiceCreateManyInputObjectSchema as InvoiceCreateManyInputObjectSchema } from './objects/InvoiceCreateManyInput.schema';
export const InvoiceCreateManySchema = z.object({ data: z.union([InvoiceCreateManyInputObjectSchema, z.array(InvoiceCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const InvoiceCreateManyZodSchema = z.object({ data: z.union([InvoiceCreateManyInputObjectSchema, z.array(InvoiceCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyInvoice.schema.js.map