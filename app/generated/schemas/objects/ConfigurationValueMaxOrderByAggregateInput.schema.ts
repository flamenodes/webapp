import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  priceModifier: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ConfigurationValueMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueMaxOrderByAggregateInput>;
export const ConfigurationValueMaxOrderByAggregateInputObjectZodSchema = makeSchema();
