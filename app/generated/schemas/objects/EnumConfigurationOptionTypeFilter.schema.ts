import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { NestedEnumConfigurationOptionTypeFilterObjectSchema as NestedEnumConfigurationOptionTypeFilterObjectSchema } from './NestedEnumConfigurationOptionTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ConfigurationOptionTypeSchema.optional(),
  in: ConfigurationOptionTypeSchema.array().optional(),
  notIn: ConfigurationOptionTypeSchema.array().optional(),
  not: z.union([ConfigurationOptionTypeSchema, z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumConfigurationOptionTypeFilterObjectSchema: z.ZodType<Prisma.EnumConfigurationOptionTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumConfigurationOptionTypeFilter>;
export const EnumConfigurationOptionTypeFilterObjectZodSchema = makeSchema();
