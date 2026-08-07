import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InvoiceCountOrderByAggregateInputObjectSchema as InvoiceCountOrderByAggregateInputObjectSchema } from './InvoiceCountOrderByAggregateInput.schema';
import { InvoiceMaxOrderByAggregateInputObjectSchema as InvoiceMaxOrderByAggregateInputObjectSchema } from './InvoiceMaxOrderByAggregateInput.schema';
import { InvoiceMinOrderByAggregateInputObjectSchema as InvoiceMinOrderByAggregateInputObjectSchema } from './InvoiceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  invoiceNumber: SortOrderSchema.optional(),
  pdfUrl: SortOrderSchema.optional(),
  razorpayData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => InvoiceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => InvoiceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => InvoiceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const InvoiceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.InvoiceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceOrderByWithAggregationInput>;
export const InvoiceOrderByWithAggregationInputObjectZodSchema = makeSchema();
