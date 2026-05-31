import * as z from 'zod';
export const TicketAggregateResultSchema = z.object({ _count: z.object({
        id: z.number(),
        ticketId: z.number(),
        title: z.number(),
        description: z.number(),
        status: z.number(),
        priority: z.number(),
        userId: z.number(),
        user: z.number(),
        assignedToId: z.number(),
        assignedTo: z.number(),
        channelName: z.number(),
        tags: z.number(),
        messages: z.number(),
        createdAt: z.number(),
        updatedAt: z.number(),
        closedAt: z.number()
    }).optional(),
    _min: z.object({
        id: z.string().nullable(),
        ticketId: z.string().nullable(),
        title: z.string().nullable(),
        description: z.string().nullable(),
        userId: z.string().nullable(),
        assignedToId: z.string().nullable(),
        channelName: z.string().nullable(),
        tags: z.array(z.string()).nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        closedAt: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        ticketId: z.string().nullable(),
        title: z.string().nullable(),
        description: z.string().nullable(),
        userId: z.string().nullable(),
        assignedToId: z.string().nullable(),
        channelName: z.string().nullable(),
        tags: z.array(z.string()).nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        closedAt: z.date().nullable()
    }).nullable().optional() });
//# sourceMappingURL=TicketAggregateResult.schema.js.map