import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';

export const ProductCategoryConfigSchema = z.object({
  id: z.string(),
  category: ProductCategorySchema,
  billingPeriods: z.array(BillingPeriodSchema),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type ProductCategoryConfigType = z.infer<typeof ProductCategoryConfigSchema>;
