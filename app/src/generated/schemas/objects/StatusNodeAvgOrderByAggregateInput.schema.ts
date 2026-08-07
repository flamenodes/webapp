import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  port: SortOrderSchema.optional(),
  latency: SortOrderSchema.optional(),
  cpu: SortOrderSchema.optional(),
  memory: SortOrderSchema.optional(),
  disk: SortOrderSchema.optional()
}).strict();
export const StatusNodeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StatusNodeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeAvgOrderByAggregateInput>;
export const StatusNodeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
