import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ticketId: SortOrderSchema.optional(),
  senderId: SortOrderSchema.optional(),
  senderRole: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TicketMessageMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketMessageMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageMinOrderByAggregateInput>;
export const TicketMessageMinOrderByAggregateInputObjectZodSchema = makeSchema();
