import * as z from 'zod';
export const TicketMessageGroupByResultSchema = z.array(z.object({
  id: z.string(),
  ticketId: z.string(),
  senderId: z.string(),
  content: z.string(),
  attachments: z.unknown(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    ticketId: z.number(),
    ticket: z.number(),
    senderId: z.number(),
    sender: z.number(),
    senderRole: z.number(),
    content: z.number(),
    attachments: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    ticketId: z.string().nullable(),
    senderId: z.string().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    ticketId: z.string().nullable(),
    senderId: z.string().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));