import * as z from 'zod';
export const ProductGroupByResultSchema = z.array(z.object({
  id: z.string(),
  planName: z.string(),
  icon: z.string(),
  badge: z.string(),
  price: z.number().int(),
  sortOrder: z.number().int(),
  featureCategory: z.string(),
  inStock: z.boolean(),
  discountId: z.string(),
  specs: z.unknown(),
  deployMode: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    planName: z.number(),
    icon: z.number(),
    badge: z.number(),
    category: z.number(),
    price: z.number(),
    sortOrder: z.number(),
    features: z.number(),
    featureCategory: z.number(),
    inStock: z.number(),
    discountId: z.number(),
    discount: z.number(),
    specs: z.number(),
    deployMode: z.number(),
    cartItems: z.number(),
    orderItems: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    price: z.number().nullable(),
    sortOrder: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    price: z.number().nullable(),
    sortOrder: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    planName: z.string().nullable(),
    icon: z.string().nullable(),
    badge: z.string().nullable(),
    price: z.number().int().nullable(),
    sortOrder: z.number().int().nullable(),
    featureCategory: z.string().nullable(),
    discountId: z.string().nullable(),
    deployMode: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    planName: z.string().nullable(),
    icon: z.string().nullable(),
    badge: z.string().nullable(),
    price: z.number().int().nullable(),
    sortOrder: z.number().int().nullable(),
    featureCategory: z.string().nullable(),
    discountId: z.string().nullable(),
    deployMode: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));