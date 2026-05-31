import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  invoiceNumber: z.literal(true).optional(),
  pdfUrl: z.literal(true).optional(),
  razorpayData: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const InvoiceCountAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCountAggregateInputType>;
export const InvoiceCountAggregateInputObjectZodSchema = makeSchema();
