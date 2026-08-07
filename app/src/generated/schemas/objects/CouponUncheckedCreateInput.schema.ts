import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { CouponTypeSchema } from '../enums/CouponType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  type: CouponTypeSchema.optional(),
  amount: z.number().int(),
  description: z.string().optional().nullable(),
  active: z.boolean().optional(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
  maxUses: z.number().int().optional().nullable(),
  usedCount: z.number().int().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const CouponUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CouponUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUncheckedCreateInput>;
export const CouponUncheckedCreateInputObjectZodSchema = makeSchema();
