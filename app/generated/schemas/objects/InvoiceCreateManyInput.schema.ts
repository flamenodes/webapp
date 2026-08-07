import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string(),
  invoiceNumber: z.string(),
  pdfUrl: z.string(),
  razorpayData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const InvoiceCreateManyInputObjectSchema: z.ZodType<Prisma.InvoiceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateManyInput>;
export const InvoiceCreateManyInputObjectZodSchema = makeSchema();
