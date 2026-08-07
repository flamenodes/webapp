import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WebSettingsCountOrderByAggregateInputObjectSchema as WebSettingsCountOrderByAggregateInputObjectSchema } from './WebSettingsCountOrderByAggregateInput.schema';
import { WebSettingsMaxOrderByAggregateInputObjectSchema as WebSettingsMaxOrderByAggregateInputObjectSchema } from './WebSettingsMaxOrderByAggregateInput.schema';
import { WebSettingsMinOrderByAggregateInputObjectSchema as WebSettingsMinOrderByAggregateInputObjectSchema } from './WebSettingsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WebSettingsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WebSettingsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WebSettingsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WebSettingsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WebSettingsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsOrderByWithAggregationInput>;
export const WebSettingsOrderByWithAggregationInputObjectZodSchema = makeSchema();
