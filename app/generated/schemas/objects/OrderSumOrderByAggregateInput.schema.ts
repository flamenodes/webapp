import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  subtotalAmount: SortOrderSchema.optional(),
  discountAmount: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional()
}).strict();
export const OrderSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderSumOrderByAggregateInput>;
export const OrderSumOrderByAggregateInputObjectZodSchema = makeSchema();
