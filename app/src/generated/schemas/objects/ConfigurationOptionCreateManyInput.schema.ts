import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema'

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
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const ConfigurationOptionCreateManyInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionCreateManyInput>;
export const ConfigurationOptionCreateManyInputObjectZodSchema = makeSchema();
