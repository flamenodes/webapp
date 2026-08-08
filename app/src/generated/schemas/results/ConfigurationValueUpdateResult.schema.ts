import * as z from 'zod';
import { ConfigurationOptionSchema } from '../models/ConfigurationOption.schema';
export const ConfigurationValueUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  optionId: z.string(),
  label: z.string(),
  value: z.string(),
  description: z.string().optional(),
  priceModifier: z.number().int(),
  metadata: z.any().optional(),
  sortOrder: z.number().int(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  option: ConfigurationOptionSchema.optional()
}));