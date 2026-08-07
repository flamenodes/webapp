import * as z from 'zod';
export const TicketFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  ticketId: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.unknown(),
  priority: z.unknown(),
  userId: z.string(),
  user: z.unknown().optional(),
  assignedToId: z.string().optional(),
  assignedTo: z.unknown().optional(),
  channelName: z.string(),
  tags: z.array(z.string()),
  messages: z.array(z.unknown()).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  closedAt: z.date().optional()
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