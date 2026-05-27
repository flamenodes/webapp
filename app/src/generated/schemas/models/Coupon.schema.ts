import * as z from 'zod';
import { CouponTypeSchema } from '../enums/CouponType.schema';

export const CouponSchema = z.object({
  id: z.string(),
  code: z.string(),
  type: CouponTypeSchema.default("FIXED"),
  amount: z.number().int(),
  description: z.string().nullish(),
  active: z.boolean().default(true),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullish(),
  maxUses: z.number().int().nullish(),
  usedCount: z.number().int(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type CouponType = z.infer<typeof CouponSchema>;
