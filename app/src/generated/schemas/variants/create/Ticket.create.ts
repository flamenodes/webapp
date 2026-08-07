import * as z from 'zod';
import { TicketStatusSchema } from '../../enums/TicketStatus.schema';
import { TicketPrioritySchema } from '../../enums/TicketPriority.schema';
// prettier-ignore
export const TicketCreateSchema = z.object({
    id: z.string(),
    ticketId: z.string(),
    title: z.string(),
    description: z.string(),
    status: TicketStatusSchema,
    priority: TicketPrioritySchema,
    userId: z.string(),
    user: z.any(),
    assignedToId: z.string().nullable(),
    assignedTo: z.any().nullable(),
    channelName: z.string(),
    tags: z.array(z.string()),
    messages: z.array(z.any()),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    closedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
}).strict();

export type TicketCreateType = z.infer<typeof TicketCreateSchema>;
