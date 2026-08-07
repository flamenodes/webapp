import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ConfigurationValueCountOrderByAggregateInputObjectSchema as ConfigurationValueCountOrderByAggregateInputObjectSchema } from './ConfigurationValueCountOrderByAggregateInput.schema';
import { ConfigurationValueAvgOrderByAggregateInputObjectSchema as ConfigurationValueAvgOrderByAggregateInputObjectSchema } from './ConfigurationValueAvgOrderByAggregateInput.schema';
import { ConfigurationValueMaxOrderByAggregateInputObjectSchema as ConfigurationValueMaxOrderByAggregateInputObjectSchema } from './ConfigurationValueMaxOrderByAggregateInput.schema';
import { ConfigurationValueMinOrderByAggregateInputObjectSchema as ConfigurationValueMinOrderByAggregateInputObjectSchema } from './ConfigurationValueMinOrderByAggregateInput.schema';
import { ConfigurationValueSumOrderByAggregateInputObjectSchema as ConfigurationValueSumOrderByAggregateInputObjectSchema } from './ConfigurationValueSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  priceModifier: SortOrderSchema.optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sortOrder: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ConfigurationValueCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ConfigurationValueAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ConfigurationValueMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ConfigurationValueMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ConfigurationValueSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ConfigurationValueOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ConfigurationValueOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueOrderByWithAggregationInput>;
export const ConfigurationValueOrderByWithAggregationInputObjectZodSchema = makeSchema();
