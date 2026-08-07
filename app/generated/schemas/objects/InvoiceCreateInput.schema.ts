import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderCreateNestedOneWithoutInvoiceInputObjectSchema as OrderCreateNestedOneWithoutInvoiceInputObjectSchema } from './OrderCreateNestedOneWithoutInvoiceInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  invoiceNumber: z.string(),
  pdfUrl: z.string(),
  razorpayData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutInvoiceInputObjectSchema)
}).strict();
export const InvoiceCreateInputObjectSchema: z.ZodType<Prisma.InvoiceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateInput>;
export const InvoiceCreateInputObjectZodSchema = makeSchema();
