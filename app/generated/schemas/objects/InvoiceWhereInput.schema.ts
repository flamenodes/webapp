import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OrderScalarRelationFilterObjectSchema as OrderScalarRelationFilterObjectSchema } from './OrderScalarRelationFilter.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const invoicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InvoiceWhereInputObjectSchema), z.lazy(() => InvoiceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InvoiceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvoiceWhereInputObjectSchema), z.lazy(() => InvoiceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  invoiceNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pdfUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  razorpayData: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  order: z.union([z.lazy(() => OrderScalarRelationFilterObjectSchema), z.lazy(() => OrderWhereInputObjectSchema)]).optional()
}).strict();
export const InvoiceWhereInputObjectSchema: z.ZodType<Prisma.InvoiceWhereInput> = invoicewhereinputSchema as unknown as z.ZodType<Prisma.InvoiceWhereInput>;
export const InvoiceWhereInputObjectZodSchema = invoicewhereinputSchema;
