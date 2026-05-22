import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  cartId: z.string(),
  productId: z.string(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CartItemCreateManyInputObjectSchema: z.ZodType<Prisma.CartItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyInput>;
export const CartItemCreateManyInputObjectZodSchema = makeSchema();
