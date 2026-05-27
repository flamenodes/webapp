import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { CouponTypeSchema } from '../enums/CouponType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  type: CouponTypeSchema.optional(),
  amount: z.number().int(),
  description: z.string().optional().nullable(),
  active: z.boolean().optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  maxUses: z.number().int().optional().nullable(),
  usedCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const CouponCreateInputObjectSchema: z.ZodType<Prisma.CouponCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponCreateInput>;
export const CouponCreateInputObjectZodSchema = makeSchema();
