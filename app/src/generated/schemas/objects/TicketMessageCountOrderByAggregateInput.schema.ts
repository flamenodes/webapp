import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ticketId: SortOrderSchema.optional(),
  senderId: SortOrderSchema.optional(),
  senderRole: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  attachments: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TicketMessageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketMessageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCountOrderByAggregateInput>;
export const TicketMessageCountOrderByAggregateInputObjectZodSchema = makeSchema();
