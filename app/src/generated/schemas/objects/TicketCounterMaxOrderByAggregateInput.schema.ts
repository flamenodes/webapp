import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterMaxOrderByAggregateInput>;
export const TicketCounterMaxOrderByAggregateInputObjectZodSchema = makeSchema();
