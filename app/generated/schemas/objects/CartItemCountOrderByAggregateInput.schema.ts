import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cartId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  billingPeriod: SortOrderSchema.optional(),
  configuration: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CartItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCountOrderByAggregateInput>;
export const CartItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
