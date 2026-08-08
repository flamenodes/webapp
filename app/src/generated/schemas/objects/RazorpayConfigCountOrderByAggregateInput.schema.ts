import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
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
  updatedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  pteroNodeId: SortOrderSchema.optional(),
  pteroNodeMode: SortOrderSchema.optional()
}).strict();
export const RazorpayConfigCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RazorpayConfigCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigCountOrderByAggregateInput>;
export const RazorpayConfigCountOrderByAggregateInputObjectZodSchema = makeSchema();
