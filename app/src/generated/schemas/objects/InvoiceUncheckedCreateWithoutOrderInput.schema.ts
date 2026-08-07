import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  invoiceNumber: z.string(),
  pdfUrl: z.string(),
  razorpayData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const InvoiceUncheckedCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceUncheckedCreateWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceUncheckedCreateWithoutOrderInput>;
export const InvoiceUncheckedCreateWithoutOrderInputObjectZodSchema = makeSchema();
