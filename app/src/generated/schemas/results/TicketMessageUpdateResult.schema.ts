import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
import { TicketSchema } from '../models/Ticket.schema';
export const TicketMessageUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  ticketId: z.string(),
  senderId: z.string(),
  senderRole: z.any(),
  content: z.string(),
  attachments: z.any().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  sender: UserSchema.optional(),
  ticket: TicketSchema.optional()
}));