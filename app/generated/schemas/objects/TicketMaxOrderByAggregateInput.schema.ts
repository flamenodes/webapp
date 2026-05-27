import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
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
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  closedAt: SortOrderSchema.optional()
}).strict();
export const TicketMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMaxOrderByAggregateInput>;
export const TicketMaxOrderByAggregateInputObjectZodSchema = makeSchema();
