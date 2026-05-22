import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  type: z.boolean().optional(),
  amount: z.boolean().optional(),
  description: z.boolean().optional(),
  active: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  maxUses: z.boolean().optional(),
  usedCount: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const CouponSelectObjectSchema: z.ZodType<Prisma.CouponSelect> = makeSchema() as unknown as z.ZodType<Prisma.CouponSelect>;
export const CouponSelectObjectZodSchema = makeSchema();
