import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  billingPeriod: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  productName: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  unitPrice: SortOrderSchema.optional()
}).strict();
export const OrderItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemMaxOrderByAggregateInput>;
export const OrderItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
