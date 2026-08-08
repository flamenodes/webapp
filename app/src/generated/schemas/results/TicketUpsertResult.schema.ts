import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
import { TicketMessageSchema } from '../models/TicketMessage.schema';
export const TicketUpsertResultSchema = z.object({
  id: z.string(),
  ticketId: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.any(),
  priority: z.any(),
  userId: z.string(),
  assignedToId: z.string().optional(),
  channelName: z.string(),
  tags: z.array(z.string()),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  closedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
  assignedTo: UserSchema.optional(),
  user: UserSchema.optional(),
  messages: z.array(TicketMessageSchema).optional()
});