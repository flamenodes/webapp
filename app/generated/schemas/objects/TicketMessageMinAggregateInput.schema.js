import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    ticketId: z.literal(true).optional(),
    senderId: z.literal(true).optional(),
    senderRole: z.literal(true).optional(),
    content: z.literal(true).optional(),
    createdAt: z.literal(true).optional()
}).strict();
export const TicketMessageMinAggregateInputObjectSchema = makeSchema();
export const TicketMessageMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageMinAggregateInput.schema.js.map