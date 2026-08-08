import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  deliveryMessage: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  couponCode: SortOrderSchema.optional(),
  discountAmount: SortOrderSchema.optional(),
  subtotalAmount: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  renewalForServerId: SortOrderSchema.optional()
}).strict();
export const OrderMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderMaxOrderByAggregateInput>;
export const OrderMaxOrderByAggregateInputObjectZodSchema = makeSchema();
