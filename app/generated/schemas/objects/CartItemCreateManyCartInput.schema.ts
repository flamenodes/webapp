import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CartItemCreateManyCartInputObjectSchema: z.ZodType<Prisma.CartItemCreateManyCartInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyCartInput>;
export const CartItemCreateManyCartInputObjectZodSchema = makeSchema();
