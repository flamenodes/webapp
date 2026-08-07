import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  mode: SortOrderSchema.optional(),
  testKeyId: SortOrderSchema.optional(),
  testKeySecret: SortOrderSchema.optional(),
  prodKeyId: SortOrderSchema.optional(),
  prodKeySecret: SortOrderSchema.optional(),
  gstin: SortOrderSchema.optional(),
  companyName: SortOrderSchema.optional(),
  companyAddress: SortOrderSchema.optional(),
  companyCity: SortOrderSchema.optional(),
  companyZip: SortOrderSchema.optional(),
  companyCountry: SortOrderSchema.optional(),
  pteroNodeMode: SortOrderSchema.optional(),
  pteroNodeId: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const RazorpayConfigMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RazorpayConfigMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigMinOrderByAggregateInput>;
export const RazorpayConfigMinOrderByAggregateInputObjectZodSchema = makeSchema();
