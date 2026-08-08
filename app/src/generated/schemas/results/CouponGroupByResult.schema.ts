import * as z from 'zod';
export const CouponGroupByResultSchema = z.array(z.object({
  id: z.string(),
  code: z.string(),
  amount: z.number().int(),
  description: z.string(),
  active: z.boolean(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  maxUses: z.number().int(),
  usedCount: z.number().int(),
  _count: z.object({
    id: z.number(),
    code: z.number(),
    type: z.number(),
    amount: z.number(),
    description: z.number(),
    active: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    expiresAt: z.number(),
    maxUses: z.number(),
    usedCount: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable(),
    maxUses: z.number().nullable(),
    usedCount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable(),
    maxUses: z.number().nullable(),
    usedCount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    amount: z.number().int().nullable(),
    description: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    maxUses: z.number().int().nullable(),
    usedCount: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    amount: z.number().int().nullable(),
    description: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    maxUses: z.number().int().nullable(),
    usedCount: z.number().int().nullable()
  }).nullable().optional()
}));