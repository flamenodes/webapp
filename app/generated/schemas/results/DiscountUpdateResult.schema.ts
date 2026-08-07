import * as z from 'zod';
export const DiscountUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  label: z.string(),
  percentage: z.number().int(),
  product: z.array(z.unknown()).optional()
}));