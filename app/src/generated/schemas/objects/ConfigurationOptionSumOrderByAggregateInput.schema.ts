import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  sortOrder: SortOrderSchema.optional()
}).strict();
export const ConfigurationOptionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionSumOrderByAggregateInput>;
export const ConfigurationOptionSumOrderByAggregateInputObjectZodSchema = makeSchema();
