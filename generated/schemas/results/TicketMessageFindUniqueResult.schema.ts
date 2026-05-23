import * as z from 'zod';
export const TicketMessageFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  ticketId: z.string(),
  ticket: z.unknown(),
  senderId: z.string(),
  sender: z.unknown(),
  senderRole: z.unknown(),
  content: z.string(),
  attachments: z.unknown().optional(),
  createdAt: z.date()
}));