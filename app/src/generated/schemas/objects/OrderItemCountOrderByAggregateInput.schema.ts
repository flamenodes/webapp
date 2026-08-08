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
  specsSnapshot: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  unitPrice: SortOrderSchema.optional(),
  configuration: SortOrderSchema.optional()
}).strict();
export const OrderItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCountOrderByAggregateInput>;
export const OrderItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
