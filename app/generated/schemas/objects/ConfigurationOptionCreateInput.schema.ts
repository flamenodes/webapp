import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
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
  createdAt: z.coerce.date().optional(),
  values: z.lazy(() => ConfigurationValueCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionCreateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionCreateInput>;
export const ConfigurationOptionCreateInputObjectZodSchema = makeSchema();
