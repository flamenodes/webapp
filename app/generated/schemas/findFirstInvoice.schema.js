import * as z from 'zod';
import { InvoiceIncludeObjectSchema as InvoiceIncludeObjectSchema } from './objects/InvoiceInclude.schema';
import { InvoiceOrderByWithRelationInputObjectSchema as InvoiceOrderByWithRelationInputObjectSchema } from './objects/InvoiceOrderByWithRelationInput.schema';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';
import { InvoiceScalarFieldEnumSchema } from './enums/InvoiceScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const InvoiceFindFirstSelectSchema = z.object({
    id: z.boolean().optional(),
    orderId: z.boolean().optional(),
    order: z.boolean().optional(),
    invoiceNumber: z.boolean().optional(),
    pdfUrl: z.boolean().optional(),
    razorpayData: z.boolean().optional(),
    createdAt: z.boolean().optional()
}).strict();
export const InvoiceFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    orderId: z.boolean().optional(),
    order: z.boolean().optional(),
    invoiceNumber: z.boolean().optional(),
    pdfUrl: z.boolean().optional(),
    razorpayData: z.boolean().optional(),
    createdAt: z.boolean().optional()
}).strict();
export const InvoiceFindFirstSchema = z.object({ select: InvoiceFindFirstSelectSchema.optional(), include: z.lazy(() => InvoiceIncludeObjectSchema.optional()), orderBy: z.union([InvoiceOrderByWithRelationInputObjectSchema, InvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: InvoiceWhereInputObjectSchema.optional(), cursor: InvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InvoiceScalarFieldEnumSchema, InvoiceScalarFieldEnumSchema.array()]).optional() }).strict();
export const InvoiceFindFirstZodSchema = z.object({ select: InvoiceFindFirstSelectSchema.optional(), include: z.lazy(() => InvoiceIncludeObjectSchema.optional()), orderBy: z.union([InvoiceOrderByWithRelationInputObjectSchema, InvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: InvoiceWhereInputObjectSchema.optional(), cursor: InvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InvoiceScalarFieldEnumSchema, InvoiceScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstInvoice.schema.js.map