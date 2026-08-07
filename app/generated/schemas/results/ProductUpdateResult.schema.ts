import * as z from 'zod';
export const ProductUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  planName: z.string(),
  icon: z.string().optional(),
  badge: z.string().optional(),
  category: z.unknown(),
  price: z.number().int(),
  sortOrder: z.number().int(),
  features: z.array(z.unknown()).optional(),
  featureCategory: z.string(),
  inStock: z.boolean(),
  discountId: z.string().optional(),
  discount: z.unknown().optional(),
  specs: z.unknown(),
  deployMode: z.string(),
  cartItems: z.array(z.unknown()).optional(),
  orderItems: z.array(z.unknown()).optional(),
  billingOptions: z.array(z.unknown()).optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));