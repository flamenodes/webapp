import * as z from 'zod';
export const OrderItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  productName: z.string(),
  specsSnapshot: z.any(),
  totalPrice: z.number().int(),
  unitPrice: z.number().int(),
  configuration: z.any(),
  _count: z.object({
    id: z.number(),
    orderId: z.number(),
    productId: z.number(),
    quantity: z.number(),
    expiresAt: z.number(),
    billingPeriod: z.number(),
    createdAt: z.number(),
    productName: z.number(),
    specsSnapshot: z.number(),
    totalPrice: z.number(),
    unitPrice: z.number(),
    configuration: z.number(),
    order: z.number(),
    product: z.number(),
    server: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable(),
    totalPrice: z.number().nullable(),
    unitPrice: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable(),
    totalPrice: z.number().nullable(),
    unitPrice: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    productId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    productName: z.string().nullable(),
    totalPrice: z.number().int().nullable(),
    unitPrice: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    orderId: z.string().nullable(),
    productId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    productName: z.string().nullable(),
    totalPrice: z.number().int().nullable(),
    unitPrice: z.number().int().nullable()
  }).nullable().optional()
}));