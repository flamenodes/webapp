import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  orderId: z.boolean().optional(),
  invoiceNumber: z.boolean().optional(),
  pdfUrl: z.boolean().optional(),
  razorpayData: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional()
}).strict();
export const InvoiceSelectObjectSchema: z.ZodType<Prisma.InvoiceSelect> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceSelect>;
export const InvoiceSelectObjectZodSchema = makeSchema();
