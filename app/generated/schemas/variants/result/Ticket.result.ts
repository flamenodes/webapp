import * as z from 'zod';
import { TicketStatusSchema } from '../../enums/TicketStatus.schema';
import { TicketPrioritySchema } from '../../enums/TicketPriority.schema';
// prettier-ignore
export const TicketResultSchema = z.object({
    id: z.string(),
    ticketId: z.string(),
    title: z.string(),
    description: z.string(),
    status: TicketStatusSchema,
    priority: TicketPrioritySchema,
    userId: z.string(),
    user: z.unknown(),
    assignedToId: z.string().nullable(),
    assignedTo: z.unknown().nullable(),
    channelName: z.string(),
    tags: z.array(z.string()),
    messages: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    closedAt: z.date().nullable()
}).strict();

export type TicketResultType = z.infer<typeof TicketResultSchema>;
