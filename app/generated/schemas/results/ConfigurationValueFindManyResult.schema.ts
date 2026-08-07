import * as z from 'zod';
export const ConfigurationValueFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  optionId: z.string(),
  option: z.unknown().optional(),
  label: z.string(),
  value: z.string(),
  description: z.string().optional(),
  priceModifier: z.number().int(),
  metadata: z.unknown().optional(),
  sortOrder: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
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