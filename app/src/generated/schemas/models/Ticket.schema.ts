import * as z from 'zod';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';

export const TicketSchema = z.object({
  id: z.string(),
  ticketId: z.string(),
  title: z.string(),
  description: z.string(),
  status: TicketStatusSchema.default("OPEN"),
  priority: TicketPrioritySchema.default("MEDIUM"),
  userId: z.string(),
  assignedToId: z.string().nullish(),
  channelName: z.string(),
  tags: z.array(z.string()),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  closedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullish(),
});

export type TicketType = z.infer<typeof TicketSchema>;
