import * as z from 'zod';
export const TicketMessageFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  ticketId: z.string(),
  ticket: z.unknown().optional(),
  senderId: z.string(),
  sender: z.unknown().optional(),
  senderRole: z.unknown(),
  content: z.string(),
  attachments: z.unknown().optional(),
  createdAt: z.date()
}));