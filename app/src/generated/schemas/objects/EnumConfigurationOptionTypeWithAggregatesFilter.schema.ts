import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectSchema as NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectSchema } from './NestedEnumConfigurationOptionTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumConfigurationOptionTypeFilterObjectSchema as NestedEnumConfigurationOptionTypeFilterObjectSchema } from './NestedEnumConfigurationOptionTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ConfigurationOptionTypeSchema.optional(),
  in: ConfigurationOptionTypeSchema.array().optional(),
  notIn: ConfigurationOptionTypeSchema.array().optional(),
  not: z.union([ConfigurationOptionTypeSchema, z.lazy(() => NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema).optional()
}).strict();
export const EnumConfigurationOptionTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumConfigurationOptionTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumConfigurationOptionTypeWithAggregatesFilter>;
export const EnumConfigurationOptionTypeWithAggregatesFilterObjectZodSchema = makeSchema();
