import * as z from 'zod';
export const ProductGroupByResultSchema = z.array(z.object({
  id: z.string(),
  planName: z.string(),
  icon: z.string(),
  imageUrl: z.string(),
  price: z.number().int(),
  features: z.array(z.string()),
  featureCategory: z.string(),
  inStock: z.boolean(),
  discountId: z.string(),
  specs: z.any(),
  deployMode: z.string(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  _count: z.object({
    id: z.number(),
    planName: z.number(),
    icon: z.number(),
    imageUrl: z.number(),
    category: z.number(),
    price: z.number(),
    features: z.number(),
    featureCategory: z.number(),
    inStock: z.number(),
    discount: z.number(),
    discountId: z.number(),
    specs: z.number(),
    deployMode: z.number(),
    cartItems: z.number(),
    orderItems: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    price: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    price: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    planName: z.string().nullable(),
    icon: z.string().nullable(),
    imageUrl: z.string().nullable(),
    price: z.number().int().nullable(),
    features: z.array(z.string()).nullable(),
    featureCategory: z.string().nullable(),
    discountId: z.string().nullable(),
    deployMode: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    planName: z.string().nullable(),
    icon: z.string().nullable(),
    imageUrl: z.string().nullable(),
    price: z.number().int().nullable(),
    features: z.array(z.string()).nullable(),
    featureCategory: z.string().nullable(),
    discountId: z.string().nullable(),
    deployMode: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
  }).nullable().optional()
}));