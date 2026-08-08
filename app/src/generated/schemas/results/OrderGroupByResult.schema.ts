import * as z from 'zod';
export const OrderGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  totalAmount: z.number().int(),
  deliveryMessage: z.string(),
  deliveryData: z.any(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  couponCode: z.string(),
  discountAmount: z.number().int(),
  subtotalAmount: z.number().int(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  renewalForServerId: z.string(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    totalAmount: z.number(),
    status: z.number(),
    deliveryMessage: z.number(),
    deliveryData: z.number(),
    createdAt: z.number(),
    couponCode: z.number(),
    discountAmount: z.number(),
    subtotalAmount: z.number(),
    updatedAt: z.number(),
    invoice: z.number(),
    renewalForServerId: z.number(),
    renewalForServer: z.number(),
    user: z.number(),
    items: z.number()
  }).optional(),
  _sum: z.object({
    totalAmount: z.number().nullable(),
    discountAmount: z.number().nullable(),
    subtotalAmount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    totalAmount: z.number().nullable(),
    discountAmount: z.number().nullable(),
    subtotalAmount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    totalAmount: z.number().int().nullable(),
    deliveryMessage: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    couponCode: z.string().nullable(),
    discountAmount: z.number().int().nullable(),
    subtotalAmount: z.number().int().nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    renewalForServerId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    totalAmount: z.number().int().nullable(),
    deliveryMessage: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    couponCode: z.string().nullable(),
    discountAmount: z.number().int().nullable(),
    subtotalAmount: z.number().int().nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    renewalForServerId: z.string().nullable()
  }).nullable().optional()
}));