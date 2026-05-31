import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    ticketId: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    status: z.literal(true).optional(),
    priority: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    assignedToId: z.literal(true).optional(),
    channelName: z.literal(true).optional(),
    tags: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    closedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const TicketCountAggregateInputObjectSchema = makeSchema();
export const TicketCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCountAggregateInput.schema.js.map