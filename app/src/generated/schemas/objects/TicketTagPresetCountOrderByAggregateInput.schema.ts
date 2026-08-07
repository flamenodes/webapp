import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TicketTagPresetCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetCountOrderByAggregateInput>;
export const TicketTagPresetCountOrderByAggregateInputObjectZodSchema = makeSchema();
