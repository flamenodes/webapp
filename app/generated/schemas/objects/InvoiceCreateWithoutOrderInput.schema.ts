import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  invoiceNumber: z.string(),
  pdfUrl: z.string(),
  razorpayData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const InvoiceCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceCreateWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateWithoutOrderInput>;
export const InvoiceCreateWithoutOrderInputObjectZodSchema = makeSchema();
