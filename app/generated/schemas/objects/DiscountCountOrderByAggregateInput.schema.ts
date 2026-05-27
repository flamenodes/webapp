import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  percentage: SortOrderSchema.optional()
}).strict();
export const DiscountCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountCountOrderByAggregateInput>;
export const DiscountCountOrderByAggregateInputObjectZodSchema = makeSchema();
