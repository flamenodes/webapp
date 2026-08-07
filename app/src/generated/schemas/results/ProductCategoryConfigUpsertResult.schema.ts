import * as z from 'zod';
export const ProductCategoryConfigUpsertResultSchema = z.object({
  id: z.string(),
  category: z.any(),
  billingPeriods: z.array(z.any()),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
});