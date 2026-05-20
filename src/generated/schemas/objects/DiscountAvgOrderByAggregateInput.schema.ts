import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  percentage: SortOrderSchema.optional()
}).strict();
export const DiscountAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountAvgOrderByAggregateInput>;
export const DiscountAvgOrderByAggregateInputObjectZodSchema = makeSchema();
