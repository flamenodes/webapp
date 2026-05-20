import * as z from 'zod';

export const DiscountSchema = z.object({
  id: z.string(),
  label: z.string(),
  percentage: z.number().int(),
});

export type DiscountType = z.infer<typeof DiscountSchema>;
