import * as z from 'zod';
export const ProductBillingOptionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  productId: z.string(),
  product: z.unknown(),
  billingPeriod: z.unknown(),
  price: z.number().int(),
  customDays: z.number().int().optional()
}));