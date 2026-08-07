import * as z from 'zod';
import { SenderRoleSchema } from '../../enums/SenderRole.schema';
// prettier-ignore
export const TicketMessageResultSchema = z.object({
    id: z.string(),
    ticketId: z.string(),
    ticket: z.any(),
    senderId: z.string(),
    sender: z.any(),
    senderRole: SenderRoleSchema,
    content: z.string(),
    attachments: z.any().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type TicketMessageResultType = z.infer<typeof TicketMessageResultSchema>;
