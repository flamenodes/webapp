import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  percentage: SortOrderSchema.optional()
}).strict();
export const DiscountMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountMinOrderByAggregateInput>;
export const DiscountMinOrderByAggregateInputObjectZodSchema = makeSchema();
