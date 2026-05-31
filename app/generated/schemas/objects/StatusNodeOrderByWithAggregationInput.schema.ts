import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StatusNodeCountOrderByAggregateInputObjectSchema as StatusNodeCountOrderByAggregateInputObjectSchema } from './StatusNodeCountOrderByAggregateInput.schema';
import { StatusNodeAvgOrderByAggregateInputObjectSchema as StatusNodeAvgOrderByAggregateInputObjectSchema } from './StatusNodeAvgOrderByAggregateInput.schema';
import { StatusNodeMaxOrderByAggregateInputObjectSchema as StatusNodeMaxOrderByAggregateInputObjectSchema } from './StatusNodeMaxOrderByAggregateInput.schema';
import { StatusNodeMinOrderByAggregateInputObjectSchema as StatusNodeMinOrderByAggregateInputObjectSchema } from './StatusNodeMinOrderByAggregateInput.schema';
import { StatusNodeSumOrderByAggregateInputObjectSchema as StatusNodeSumOrderByAggregateInputObjectSchema } from './StatusNodeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  ip: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  port: SortOrderSchema.optional(),
  protocol: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  latency: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastChecked: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cpu: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memory: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  disk: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => StatusNodeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StatusNodeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StatusNodeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StatusNodeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StatusNodeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StatusNodeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StatusNodeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeOrderByWithAggregationInput>;
export const StatusNodeOrderByWithAggregationInputObjectZodSchema = makeSchema();
