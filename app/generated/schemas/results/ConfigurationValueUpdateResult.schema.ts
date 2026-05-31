import * as z from 'zod';
export const ConfigurationValueUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  optionId: z.string(),
  option: z.unknown(),
  label: z.string(),
  value: z.string(),
  description: z.string().optional(),
  priceModifier: z.number().int(),
  metadata: z.unknown().optional(),
  sortOrder: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
}));