import * as z from 'zod';
export const ProductFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  planName: z.string(),
  icon: z.string().optional(),
  badge: z.string().optional(),
  category: z.unknown(),
  price: z.number().int(),
  sortOrder: z.number().int(),
  features: z.array(z.unknown()),
  featureCategory: z.string(),
  inStock: z.boolean(),
  discountId: z.string().optional(),
  discount: z.unknown().optional(),
  specs: z.unknown(),
  deployMode: z.string(),
  cartItems: z.array(z.unknown()),
  orderItems: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});