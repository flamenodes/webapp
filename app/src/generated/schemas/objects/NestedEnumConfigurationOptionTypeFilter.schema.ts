import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema'

const nestedenumconfigurationoptiontypefilterSchema = z.object({
  equals: ConfigurationOptionTypeSchema.optional(),
  in: ConfigurationOptionTypeSchema.array().optional(),
  notIn: ConfigurationOptionTypeSchema.array().optional(),
  not: z.union([ConfigurationOptionTypeSchema, z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumConfigurationOptionTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumConfigurationOptionTypeFilter> = nestedenumconfigurationoptiontypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumConfigurationOptionTypeFilter>;
export const NestedEnumConfigurationOptionTypeFilterObjectZodSchema = nestedenumconfigurationoptiontypefilterSchema;
