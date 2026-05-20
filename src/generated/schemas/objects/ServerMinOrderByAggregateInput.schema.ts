import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  orderItemId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  ip: SortOrderSchema.optional(),
  port: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  suspended: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ServerMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServerMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerMinOrderByAggregateInput>;
export const ServerMinOrderByAggregateInputObjectZodSchema = makeSchema();
