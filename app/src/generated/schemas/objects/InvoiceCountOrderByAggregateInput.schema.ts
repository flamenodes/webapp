import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  invoiceNumber: SortOrderSchema.optional(),
  pdfUrl: SortOrderSchema.optional(),
  razorpayData: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const InvoiceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCountOrderByAggregateInput>;
export const InvoiceCountOrderByAggregateInputObjectZodSchema = makeSchema();
