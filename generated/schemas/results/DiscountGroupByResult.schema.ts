import * as z from 'zod';
export const DiscountGroupByResultSchema = z.array(z.object({
  id: z.string(),
  label: z.string(),
  percentage: z.number().int(),
  _count: z.object({
    id: z.number(),
    label: z.number(),
    percentage: z.number(),
    product: z.number()
  }).optional(),
  _sum: z.object({
    percentage: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    percentage: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    label: z.string().nullable(),
    percentage: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    label: z.string().nullable(),
    percentage: z.number().int().nullable()
  }).nullable().optional()
}));