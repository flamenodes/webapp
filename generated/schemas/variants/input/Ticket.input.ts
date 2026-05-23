import * as z from 'zod';
import { TicketStatusSchema } from '../../enums/TicketStatus.schema';
import { TicketPrioritySchema } from '../../enums/TicketPriority.schema';
// prettier-ignore
export const TicketInputSchema = z.object({
    id: z.string(),
    ticketId: z.string(),
    title: z.string(),
    description: z.string(),
    status: TicketStatusSchema,
    priority: TicketPrioritySchema,
    userId: z.string(),
    user: z.unknown(),
    assignedToId: z.string().optional().nullable(),
    assignedTo: z.unknown().optional().nullable(),
    channelName: z.string(),
    tags: z.array(z.string()),
    messages: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    closedAt: z.date().optional().nullable()
}).strict();

export type TicketInputType = z.infer<typeof TicketInputSchema>;
