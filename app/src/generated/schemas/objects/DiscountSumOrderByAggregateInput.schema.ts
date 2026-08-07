import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  percentage: SortOrderSchema.optional()
}).strict();
export const DiscountSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountSumOrderByAggregateInput>;
export const DiscountSumOrderByAggregateInputObjectZodSchema = makeSchema();
