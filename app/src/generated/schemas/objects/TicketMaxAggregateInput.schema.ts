import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ticketId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  status: z.literal(true).optional(),
  priority: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  assignedToId: z.literal(true).optional(),
  channelName: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  closedAt: z.literal(true).optional()
}).strict();
export const TicketMaxAggregateInputObjectSchema: z.ZodType<Prisma.TicketMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketMaxAggregateInputType>;
export const TicketMaxAggregateInputObjectZodSchema = makeSchema();
