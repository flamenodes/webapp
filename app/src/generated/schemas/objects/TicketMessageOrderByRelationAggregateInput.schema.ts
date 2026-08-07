import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TicketMessageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TicketMessageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageOrderByRelationAggregateInput>;
export const TicketMessageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
