import * as z from 'zod';
export const OrderGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  subtotalAmount: z.number().int(),
  discountAmount: z.number().int(),
  totalAmount: z.number().int(),
  couponCode: z.string(),
  deliveryMessage: z.string(),
  deliveryData: z.any(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    status: z.number(),
    subtotalAmount: z.number(),
    discountAmount: z.number(),
    totalAmount: z.number(),
    couponCode: z.number(),
    deliveryMessage: z.number(),
    deliveryData: z.number(),
    items: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    subtotalAmount: z.number().nullable(),
    discountAmount: z.number().nullable(),
    totalAmount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    subtotalAmount: z.number().nullable(),
    discountAmount: z.number().nullable(),
    totalAmount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    subtotalAmount: z.number().int().nullable(),
    discountAmount: z.number().int().nullable(),
    totalAmount: z.number().int().nullable(),
    couponCode: z.string().nullable(),
    deliveryMessage: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    subtotalAmount: z.number().int().nullable(),
    discountAmount: z.number().int().nullable(),
    totalAmount: z.number().int().nullable(),
    couponCode: z.string().nullable(),
    deliveryMessage: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
  }).nullable().optional()
}));