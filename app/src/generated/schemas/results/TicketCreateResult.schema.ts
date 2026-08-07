import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
import { TicketMessageSchema } from '../models/TicketMessage.schema';
export const TicketCreateResultSchema = z.object({
  id: z.string(),
  ticketId: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.any(),
  priority: z.any(),
  userId: z.string(),
  user: UserSchema.optional(),
  assignedToId: z.string().optional(),
  assignedTo: UserSchema.optional(),
  channelName: z.string(),
  tags: z.array(z.string()),
  messages: z.array(TicketMessageSchema).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  closedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional()
});