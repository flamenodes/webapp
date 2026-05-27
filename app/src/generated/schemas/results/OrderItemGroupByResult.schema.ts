import * as z from 'zod';
export const OrderItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
  productName: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number().int(),
  totalPrice: z.number().int(),
  specsSnapshot: z.any(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  _count: z.object({
    id: z.number(),
    orderId: z.number(),
    productId: z.number(),
    productName: z.number(),
    quantity: z.number(),
    billingPeriod: z.number(),
    unitPrice: z.number(),
    totalPrice: z.number(),
    specsSnapshot: z.number(),
    expiresAt: z.number(),
    order: z.number(),
    product: z.number(),
    server: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable(),
    unitPrice: z.number().nullable(),
    totalPrice: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable(),
    unitPrice: z.number().nullable(),
    totalPrice: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    productId: z.string().nullable(),
    productName: z.string().nullable(),
    quantity: z.number().int().nullable(),
    unitPrice: z.number().int().nullable(),
    totalPrice: z.number().int().nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    productId: z.string().nullable(),
    productName: z.string().nullable(),
    quantity: z.number().int().nullable(),
    unitPrice: z.number().int().nullable(),
    totalPrice: z.number().int().nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
  }).nullable().optional()
}));