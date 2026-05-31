import * as z from 'zod';
import { InvoiceSelectObjectSchema as InvoiceSelectObjectSchema } from './objects/InvoiceSelect.schema';
import { InvoiceIncludeObjectSchema as InvoiceIncludeObjectSchema } from './objects/InvoiceInclude.schema';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';
import { InvoiceCreateInputObjectSchema as InvoiceCreateInputObjectSchema } from './objects/InvoiceCreateInput.schema';
import { InvoiceUncheckedCreateInputObjectSchema as InvoiceUncheckedCreateInputObjectSchema } from './objects/InvoiceUncheckedCreateInput.schema';
import { InvoiceUpdateInputObjectSchema as InvoiceUpdateInputObjectSchema } from './objects/InvoiceUpdateInput.schema';
import { InvoiceUncheckedUpdateInputObjectSchema as InvoiceUncheckedUpdateInputObjectSchema } from './objects/InvoiceUncheckedUpdateInput.schema';
export const InvoiceUpsertOneSchema = z.object({ select: InvoiceSelectObjectSchema.optional(), include: InvoiceIncludeObjectSchema.optional(), where: InvoiceWhereUniqueInputObjectSchema, create: z.union([InvoiceCreateInputObjectSchema, InvoiceUncheckedCreateInputObjectSchema]), update: z.union([InvoiceUpdateInputObjectSchema, InvoiceUncheckedUpdateInputObjectSchema]) }).strict();
export const InvoiceUpsertOneZodSchema = z.object({ select: InvoiceSelectObjectSchema.optional(), include: InvoiceIncludeObjectSchema.optional(), where: InvoiceWhereUniqueInputObjectSchema, create: z.union([InvoiceCreateInputObjectSchema, InvoiceUncheckedCreateInputObjectSchema]), update: z.union([InvoiceUpdateInputObjectSchema, InvoiceUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneInvoice.schema.js.map