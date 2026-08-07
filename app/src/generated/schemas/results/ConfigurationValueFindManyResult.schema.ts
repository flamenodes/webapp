import * as z from 'zod';
import { ConfigurationOptionSchema } from '../models/ConfigurationOption.schema';
export const ConfigurationValueFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  optionId: z.string(),
  option: ConfigurationOptionSchema.optional(),
  label: z.string(),
  value: z.string(),
  description: z.string().optional(),
  priceModifier: z.number().int(),
  metadata: z.any().optional(),
  sortOrder: z.number().int(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});