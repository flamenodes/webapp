import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  productName: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  billingPeriod: SortOrderSchema.optional(),
  unitPrice: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const OrderItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemMinOrderByAggregateInput>;
export const OrderItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
