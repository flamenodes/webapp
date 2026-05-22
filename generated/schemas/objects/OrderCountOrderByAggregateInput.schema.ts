import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  subtotalAmount: SortOrderSchema.optional(),
  discountAmount: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  couponCode: SortOrderSchema.optional(),
  deliveryMessage: SortOrderSchema.optional(),
  deliveryData: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const OrderCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCountOrderByAggregateInput>;
export const OrderCountOrderByAggregateInputObjectZodSchema = makeSchema();
