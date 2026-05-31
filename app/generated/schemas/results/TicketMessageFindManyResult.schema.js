import * as z from 'zod';
export const TicketMessageFindManyResultSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        ticketId: z.string(),
        ticket: z.unknown(),
        senderId: z.string(),
        sender: z.unknown(),
        senderRole: z.unknown(),
        content: z.string(),
        attachments: z.unknown().optional(),
        createdAt: z.date()
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
//# sourceMappingURL=TicketMessageFindManyResult.schema.js.map