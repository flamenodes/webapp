import * as z from 'zod';
export const ProductBillingOptionCreateResultSchema = z.object({
  id: z.string(),
  productId: z.string(),
  product: z.unknown().optional(),
  billingPeriod: z.unknown(),
  price: z.number().int(),
  customDays: z.number().int().optional()
});