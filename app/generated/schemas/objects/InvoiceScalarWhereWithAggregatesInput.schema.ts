import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const invoicescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InvoiceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InvoiceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InvoiceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvoiceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InvoiceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  invoiceNumber: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  pdfUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  razorpayData: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const InvoiceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput> = invoicescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput>;
export const InvoiceScalarWhereWithAggregatesInputObjectZodSchema = invoicescalarwherewithaggregatesinputSchema;
