import * as z from 'zod';
export const DiscountUpsertResultSchema = z.object({
  id: z.string(),
  label: z.string(),
  percentage: z.number().int(),
  product: z.array(z.any())
});