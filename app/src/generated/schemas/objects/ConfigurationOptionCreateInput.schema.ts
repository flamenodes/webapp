import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ConfigurationValueCreateNestedManyWithoutOptionInputObjectSchema as ConfigurationValueCreateNestedManyWithoutOptionInputObjectSchema } from './ConfigurationValueCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string(),
  description: z.string().optional().nullable(),
  type: ConfigurationOptionTypeSchema.optional(),
  required: z.boolean().optional(),
  category: ProductCategorySchema,
  sortOrder: z.number().int().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  values: z.lazy(() => ConfigurationValueCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionCreateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionCreateInput>;
export const ConfigurationOptionCreateInputObjectZodSchema = makeSchema();
