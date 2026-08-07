import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  invoiceNumber: z.literal(true).optional(),
  pdfUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const InvoiceMinAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceMinAggregateInputType>;
export const InvoiceMinAggregateInputObjectZodSchema = makeSchema();
