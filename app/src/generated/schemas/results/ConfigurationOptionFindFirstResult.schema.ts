import * as z from 'zod';
import { ConfigurationValueSchema } from '../models/ConfigurationValue.schema';
export const ConfigurationOptionFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),
  description: z.string().optional(),
  type: z.any(),
  required: z.boolean(),
  category: z.any(),
  sortOrder: z.number().int(),
  values: z.array(ConfigurationValueSchema).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));