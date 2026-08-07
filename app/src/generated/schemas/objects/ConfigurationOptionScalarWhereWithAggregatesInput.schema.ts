import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumConfigurationOptionTypeWithAggregatesFilterObjectSchema as EnumConfigurationOptionTypeWithAggregatesFilterObjectSchema } from './EnumConfigurationOptionTypeWithAggregatesFilter.schema';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumProductCategoryWithAggregatesFilterObjectSchema as EnumProductCategoryWithAggregatesFilterObjectSchema } from './EnumProductCategoryWithAggregatesFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const configurationoptionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ConfigurationOptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConfigurationOptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConfigurationOptionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConfigurationOptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConfigurationOptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumConfigurationOptionTypeWithAggregatesFilterObjectSchema), ConfigurationOptionTypeSchema]).optional(),
  required: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  category: z.union([z.lazy(() => EnumProductCategoryWithAggregatesFilterObjectSchema), ProductCategorySchema]).optional(),
  sortOrder: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const ConfigurationOptionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput> = configurationoptionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput>;
export const ConfigurationOptionScalarWhereWithAggregatesInputObjectZodSchema = configurationoptionscalarwherewithaggregatesinputSchema;
