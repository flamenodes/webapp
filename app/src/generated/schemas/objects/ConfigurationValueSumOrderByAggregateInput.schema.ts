import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  priceModifier: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional()
}).strict();
export const ConfigurationValueSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueSumOrderByAggregateInput>;
export const ConfigurationValueSumOrderByAggregateInputObjectZodSchema = makeSchema();
