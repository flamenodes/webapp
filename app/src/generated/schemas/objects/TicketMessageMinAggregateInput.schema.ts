import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ticketId: z.literal(true).optional(),
  senderId: z.literal(true).optional(),
  senderRole: z.literal(true).optional(),
  content: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const TicketMessageMinAggregateInputObjectSchema: z.ZodType<Prisma.TicketMessageMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageMinAggregateInputType>;
export const TicketMessageMinAggregateInputObjectZodSchema = makeSchema();
