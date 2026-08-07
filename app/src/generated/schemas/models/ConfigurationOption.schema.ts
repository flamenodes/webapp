import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';

export const ConfigurationOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),
  description: z.string().nullish(),
  type: ConfigurationOptionTypeSchema.default("SELECT"),
  required: z.boolean().default(true),
  category: ProductCategorySchema,
  sortOrder: z.number().int(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type ConfigurationOptionType = z.infer<typeof ConfigurationOptionSchema>;
