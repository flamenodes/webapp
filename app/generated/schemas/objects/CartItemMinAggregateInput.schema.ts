import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cartId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  billingPeriod: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CartItemMinAggregateInputObjectSchema: z.ZodType<Prisma.CartItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CartItemMinAggregateInputType>;
export const CartItemMinAggregateInputObjectZodSchema = makeSchema();
