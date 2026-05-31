import * as z from 'zod';
export const TicketUpdateResultSchema = z.nullable(z.object({
    id: z.string(),
    ticketId: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.unknown(),
    priority: z.unknown(),
    userId: z.string(),
    user: z.unknown(),
    assignedToId: z.string().optional(),
    assignedTo: z.unknown().optional(),
    channelName: z.string(),
    tags: z.array(z.string()),
    messages: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    closedAt: z.date().optional()
}));
//# sourceMappingURL=TicketUpdateResult.schema.js.map