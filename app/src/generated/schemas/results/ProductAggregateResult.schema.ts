import * as z from 'zod';
export const ProductAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    deployMode: z.number(),
    specs: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    category: z.number(),
    icon: z.number(),
    inStock: z.number(),
    planName: z.number(),
    price: z.number(),
    discountId: z.number(),
    featureCategory: z.number(),
    badge: z.number(),
    sortOrder: z.number(),
    cartItems: z.number(),
    orderItems: z.number(),
    discount: z.number(),
    billingOptions: z.number(),
    features: z.number()
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
    deployMode: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    icon: z.string().nullable(),
    planName: z.string().nullable(),
    price: z.number().int().nullable(),
    discountId: z.string().nullable(),
    featureCategory: z.string().nullable(),
    badge: z.string().nullable(),
    sortOrder: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    deployMode: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    icon: z.string().nullable(),
    planName: z.string().nullable(),
    price: z.number().int().nullable(),
    discountId: z.string().nullable(),
    featureCategory: z.string().nullable(),
    badge: z.string().nullable(),
    sortOrder: z.number().int().nullable()
  }).nullable().optional()});