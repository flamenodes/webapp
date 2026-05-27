import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DiscountCountOrderByAggregateInputObjectSchema as DiscountCountOrderByAggregateInputObjectSchema } from './DiscountCountOrderByAggregateInput.schema';
import { DiscountAvgOrderByAggregateInputObjectSchema as DiscountAvgOrderByAggregateInputObjectSchema } from './DiscountAvgOrderByAggregateInput.schema';
import { DiscountMaxOrderByAggregateInputObjectSchema as DiscountMaxOrderByAggregateInputObjectSchema } from './DiscountMaxOrderByAggregateInput.schema';
import { DiscountMinOrderByAggregateInputObjectSchema as DiscountMinOrderByAggregateInputObjectSchema } from './DiscountMinOrderByAggregateInput.schema';
import { DiscountSumOrderByAggregateInputObjectSchema as DiscountSumOrderByAggregateInputObjectSchema } from './DiscountSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  percentage: SortOrderSchema.optional(),
  _count: z.lazy(() => DiscountCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DiscountAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DiscountMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DiscountMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DiscountSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DiscountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DiscountOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountOrderByWithAggregationInput>;
export const DiscountOrderByWithAggregationInputObjectZodSchema = makeSchema();
