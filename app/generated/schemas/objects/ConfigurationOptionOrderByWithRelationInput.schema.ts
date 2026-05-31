import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ConfigurationValueOrderByRelationAggregateInputObjectSchema as ConfigurationValueOrderByRelationAggregateInputObjectSchema } from './ConfigurationValueOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  required: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  values: z.lazy(() => ConfigurationValueOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionOrderByWithRelationInput>;
export const ConfigurationOptionOrderByWithRelationInputObjectZodSchema = makeSchema();
