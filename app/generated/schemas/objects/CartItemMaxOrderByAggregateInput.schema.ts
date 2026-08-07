import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cartId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  billingPeriod: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CartItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemMaxOrderByAggregateInput>;
export const CartItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
