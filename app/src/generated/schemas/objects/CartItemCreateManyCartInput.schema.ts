import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema.optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const CartItemCreateManyCartInputObjectSchema: z.ZodType<Prisma.CartItemCreateManyCartInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyCartInput>;
export const CartItemCreateManyCartInputObjectZodSchema = makeSchema();
