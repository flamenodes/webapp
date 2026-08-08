import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  ip: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  port: SortOrderSchema.optional(),
  protocol: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  latency: SortOrderSchema.optional(),
  lastChecked: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  cpu: SortOrderSchema.optional(),
  disk: SortOrderSchema.optional(),
  memory: SortOrderSchema.optional()
}).strict();
export const StatusNodeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StatusNodeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeCountOrderByAggregateInput>;
export const StatusNodeCountOrderByAggregateInputObjectZodSchema = makeSchema();
