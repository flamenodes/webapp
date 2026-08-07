import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ticketId: z.literal(true).optional(),
  senderId: z.literal(true).optional(),
  senderRole: z.literal(true).optional(),
  content: z.literal(true).optional(),
  attachments: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TicketMessageCountAggregateInputObjectSchema: z.ZodType<Prisma.TicketMessageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCountAggregateInputType>;
export const TicketMessageCountAggregateInputObjectZodSchema = makeSchema();
