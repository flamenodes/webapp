import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  invoiceNumber: SortOrderSchema.optional(),
  pdfUrl: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const InvoiceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceMinOrderByAggregateInput>;
export const InvoiceMinOrderByAggregateInputObjectZodSchema = makeSchema();
