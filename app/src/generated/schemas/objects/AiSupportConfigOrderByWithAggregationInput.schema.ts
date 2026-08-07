import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AiSupportConfigCountOrderByAggregateInputObjectSchema as AiSupportConfigCountOrderByAggregateInputObjectSchema } from './AiSupportConfigCountOrderByAggregateInput.schema';
import { AiSupportConfigMaxOrderByAggregateInputObjectSchema as AiSupportConfigMaxOrderByAggregateInputObjectSchema } from './AiSupportConfigMaxOrderByAggregateInput.schema';
import { AiSupportConfigMinOrderByAggregateInputObjectSchema as AiSupportConfigMinOrderByAggregateInputObjectSchema } from './AiSupportConfigMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  systemPrompt: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AiSupportConfigCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AiSupportConfigMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AiSupportConfigMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AiSupportConfigOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AiSupportConfigOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiSupportConfigOrderByWithAggregationInput>;
export const AiSupportConfigOrderByWithAggregationInputObjectZodSchema = makeSchema();
