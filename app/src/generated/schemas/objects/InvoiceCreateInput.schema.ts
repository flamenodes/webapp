import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderCreateNestedOneWithoutInvoiceInputObjectSchema as OrderCreateNestedOneWithoutInvoiceInputObjectSchema } from './OrderCreateNestedOneWithoutInvoiceInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  invoiceNumber: z.string(),
  pdfUrl: z.string(),
  razorpayData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutInvoiceInputObjectSchema)
}).strict();
export const InvoiceCreateInputObjectSchema: z.ZodType<Prisma.InvoiceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateInput>;
export const InvoiceCreateInputObjectZodSchema = makeSchema();
