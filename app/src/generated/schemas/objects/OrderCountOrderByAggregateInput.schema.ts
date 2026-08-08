import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  deliveryMessage: SortOrderSchema.optional(),
  deliveryData: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  couponCode: SortOrderSchema.optional(),
  discountAmount: SortOrderSchema.optional(),
  subtotalAmount: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  renewalForServerId: SortOrderSchema.optional()
}).strict();
export const OrderCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCountOrderByAggregateInput>;
export const OrderCountOrderByAggregateInputObjectZodSchema = makeSchema();
