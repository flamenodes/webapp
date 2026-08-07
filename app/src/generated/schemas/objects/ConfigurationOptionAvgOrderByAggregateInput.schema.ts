import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  sortOrder: SortOrderSchema.optional()
}).strict();
export const ConfigurationOptionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionAvgOrderByAggregateInput>;
export const ConfigurationOptionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
