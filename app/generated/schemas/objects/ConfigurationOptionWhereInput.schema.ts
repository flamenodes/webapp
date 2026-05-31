import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumConfigurationOptionTypeFilterObjectSchema as EnumConfigurationOptionTypeFilterObjectSchema } from './EnumConfigurationOptionTypeFilter.schema';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumProductCategoryFilterObjectSchema as EnumProductCategoryFilterObjectSchema } from './EnumProductCategoryFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ConfigurationValueListRelationFilterObjectSchema as ConfigurationValueListRelationFilterObjectSchema } from './ConfigurationValueListRelationFilter.schema'

const configurationoptionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConfigurationOptionWhereInputObjectSchema), z.lazy(() => ConfigurationOptionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConfigurationOptionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConfigurationOptionWhereInputObjectSchema), z.lazy(() => ConfigurationOptionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumConfigurationOptionTypeFilterObjectSchema), ConfigurationOptionTypeSchema]).optional(),
  required: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  category: z.union([z.lazy(() => EnumProductCategoryFilterObjectSchema), ProductCategorySchema]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  values: z.lazy(() => ConfigurationValueListRelationFilterObjectSchema).optional()
}).strict();
export const ConfigurationOptionWhereInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionWhereInput> = configurationoptionwhereinputSchema as unknown as z.ZodType<Prisma.ConfigurationOptionWhereInput>;
export const ConfigurationOptionWhereInputObjectZodSchema = configurationoptionwhereinputSchema;
