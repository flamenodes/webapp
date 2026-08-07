import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumConfigurationOptionTypeFilterObjectSchema as NestedEnumConfigurationOptionTypeFilterObjectSchema } from './NestedEnumConfigurationOptionTypeFilter.schema'

const nestedenumconfigurationoptiontypewithaggregatesfilterSchema = z.object({
  equals: ConfigurationOptionTypeSchema.optional(),
  in: ConfigurationOptionTypeSchema.array().optional(),
  notIn: ConfigurationOptionTypeSchema.array().optional(),
  not: z.union([ConfigurationOptionTypeSchema, z.lazy(() => NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumConfigurationOptionTypeWithAggregatesFilter> = nestedenumconfigurationoptiontypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumConfigurationOptionTypeWithAggregatesFilter>;
export const NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectZodSchema = nestedenumconfigurationoptiontypewithaggregatesfilterSchema;
