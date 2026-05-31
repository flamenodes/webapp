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
  metadata: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ConfigurationValueCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueCountOrderByAggregateInput>;
export const ConfigurationValueCountOrderByAggregateInputObjectZodSchema = makeSchema();
