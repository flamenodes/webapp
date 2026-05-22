import * as z from 'zod';
export const ProductCreateResultSchema = z.object({
  id: z.string(),
  planName: z.string(),
  icon: z.string().optional(),
  badge: z.string().optional(),
  category: z.any(),
  price: z.number().int(),
  sortOrder: z.number().int(),
  features: z.array(z.any()),
  featureCategory: z.string(),
  inStock: z.boolean(),
  discountId: z.string().optional(),
  discount: z.any().optional(),
  specs: z.any(),
  deployMode: z.string(),
  cartItems: z.array(z.any()),
  orderItems: z.array(z.any()),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
});