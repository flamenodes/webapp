import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ConfigurationOptionOrderByWithRelationInputObjectSchema as ConfigurationOptionOrderByWithRelationInputObjectSchema } from './ConfigurationOptionOrderByWithRelationInput.schema'

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
  option: z.lazy(() => ConfigurationOptionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ConfigurationValueOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ConfigurationValueOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueOrderByWithRelationInput>;
export const ConfigurationValueOrderByWithRelationInputObjectZodSchema = makeSchema();
