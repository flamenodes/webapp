import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  invoiceNumber: z.literal(true).optional(),
  pdfUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const InvoiceMaxAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceMaxAggregateInputType>;
export const InvoiceMaxAggregateInputObjectZodSchema = makeSchema();
