import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterAvgOrderByAggregateInput>;
export const TicketCounterAvgOrderByAggregateInputObjectZodSchema = makeSchema();
