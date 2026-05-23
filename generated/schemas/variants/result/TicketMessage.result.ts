import * as z from 'zod';
import { SenderRoleSchema } from '../../enums/SenderRole.schema';
// prettier-ignore
export const TicketMessageResultSchema = z.object({
    id: z.string(),
    ticketId: z.string(),
    ticket: z.unknown(),
    senderId: z.string(),
    sender: z.unknown(),
    senderRole: SenderRoleSchema,
    content: z.string(),
    attachments: z.unknown().nullable(),
    createdAt: z.date()
}).strict();

export type TicketMessageResultType = z.infer<typeof TicketMessageResultSchema>;
