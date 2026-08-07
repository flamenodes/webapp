import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ticketId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  assignedToId: SortOrderSchema.optional(),
  channelName: SortOrderSchema.optional(),
  tags: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  closedAt: SortOrderSchema.optional()
}).strict();
export const TicketCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCountOrderByAggregateInput>;
export const TicketCountOrderByAggregateInputObjectZodSchema = makeSchema();
