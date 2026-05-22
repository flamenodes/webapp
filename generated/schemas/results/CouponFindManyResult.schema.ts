import * as z from 'zod';
export const CouponFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  code: z.string(),
  type: z.unknown(),
  amount: z.number().int(),
  description: z.string().optional(),
  active: z.boolean(),
  expiresAt: z.date().optional(),
  maxUses: z.number().int().optional(),
  usedCount: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
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