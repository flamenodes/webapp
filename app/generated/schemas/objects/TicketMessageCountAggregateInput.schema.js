import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    ticketId: z.literal(true).optional(),
    senderId: z.literal(true).optional(),
    senderRole: z.literal(true).optional(),
    content: z.literal(true).optional(),
    attachments: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const TicketMessageCountAggregateInputObjectSchema = makeSchema();
export const TicketMessageCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageCountAggregateInput.schema.js.map