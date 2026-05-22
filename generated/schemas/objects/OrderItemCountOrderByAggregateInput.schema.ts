import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
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
  specsSnapshot: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const OrderItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCountOrderByAggregateInput>;
export const OrderItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
