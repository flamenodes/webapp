import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterSumOrderByAggregateInput>;
export const TicketCounterSumOrderByAggregateInputObjectZodSchema = makeSchema();
