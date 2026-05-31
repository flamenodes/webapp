import * as z from 'zod';
export const ProductCategoryConfigCreateResultSchema = z.object({
  id: z.string(),
  category: z.unknown(),
  billingPeriods: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});