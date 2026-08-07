import * as z from 'zod';
import { TicketSchema } from '../models/Ticket.schema';
import { UserSchema } from '../models/User.schema';
export const TicketMessageFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  ticketId: z.string(),
  ticket: TicketSchema.optional(),
  senderId: z.string(),
  sender: UserSchema.optional(),
  senderRole: z.any(),
  content: z.string(),
  attachments: z.any().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});