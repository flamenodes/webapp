import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  percentage: SortOrderSchema.optional()
}).strict();
export const DiscountMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountMaxOrderByAggregateInput>;
export const DiscountMaxOrderByAggregateInputObjectZodSchema = makeSchema();
