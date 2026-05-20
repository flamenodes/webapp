import * as z from 'zod';
export const ProductFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  planName: z.string(),
  icon: z.string().optional(),
  imageUrl: z.string().optional(),
  category: z.any(),
  price: z.number().int(),
  features: z.array(z.string()),
  featureCategory: z.string(),
  inStock: z.boolean(),
  discount: z.any().optional(),
  discountId: z.string().optional(),
  specs: z.any(),
  deployMode: z.string(),
  cartItems: z.array(z.any()),
  orderItems: z.array(z.any()),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
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