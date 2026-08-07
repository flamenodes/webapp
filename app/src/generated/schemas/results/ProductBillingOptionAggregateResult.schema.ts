import * as z from 'zod';
export const ProductBillingOptionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    productId: z.number(),
    product: z.number(),
    billingPeriod: z.number(),
    price: z.number(),
    customDays: z.number()
  }).optional(),
  _sum: z.object({
    price: z.number().nullable(),
    customDays: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    price: z.number().nullable(),
    customDays: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    productId: z.string().nullable(),
    price: z.number().int().nullable(),
    customDays: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    productId: z.string().nullable(),
    price: z.number().int().nullable(),
    customDays: z.number().int().nullable()
  }).nullable().optional()});