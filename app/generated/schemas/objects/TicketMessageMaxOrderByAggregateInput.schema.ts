import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ticketId: SortOrderSchema.optional(),
  senderId: SortOrderSchema.optional(),
  senderRole: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TicketMessageMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketMessageMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageMaxOrderByAggregateInput>;
export const TicketMessageMaxOrderByAggregateInputObjectZodSchema = makeSchema();
