import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TicketTagPresetCountOrderByAggregateInputObjectSchema as TicketTagPresetCountOrderByAggregateInputObjectSchema } from './TicketTagPresetCountOrderByAggregateInput.schema';
import { TicketTagPresetMaxOrderByAggregateInputObjectSchema as TicketTagPresetMaxOrderByAggregateInputObjectSchema } from './TicketTagPresetMaxOrderByAggregateInput.schema';
import { TicketTagPresetMinOrderByAggregateInputObjectSchema as TicketTagPresetMinOrderByAggregateInputObjectSchema } from './TicketTagPresetMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TicketTagPresetCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TicketTagPresetMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TicketTagPresetMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TicketTagPresetOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TicketTagPresetOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetOrderByWithAggregationInput>;
export const TicketTagPresetOrderByWithAggregationInputObjectZodSchema = makeSchema();
