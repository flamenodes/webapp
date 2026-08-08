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
    assignedToId: z.string().optional().nullable(),
    channelName: z.string(),
    tags: z.array(z.string()),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    closedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional().nullable(),
    assignedTo: z.any().optional().nullable(),
    user: z.any(),
    messages: z.array(z.any())
}).strict();

export type TicketInputType = z.infer<typeof TicketInputSchema>;
