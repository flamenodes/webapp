import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  required: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ConfigurationOptionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionMaxOrderByAggregateInput>;
export const ConfigurationOptionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
