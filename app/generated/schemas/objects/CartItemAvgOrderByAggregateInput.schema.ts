import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional()
}).strict();
export const CartItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemAvgOrderByAggregateInput>;
export const CartItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
