import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';

export const ProductBillingOptionSchema = z.object({
  id: z.string(),
  productId: z.string(),
  billingPeriod: BillingPeriodSchema,
  price: z.number().int(),
  customDays: z.number().int().nullish(),
});

export type ProductBillingOptionType = z.infer<typeof ProductBillingOptionSchema>;
