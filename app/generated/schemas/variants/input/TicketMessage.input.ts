import * as z from 'zod';
import { SenderRoleSchema } from '../../enums/SenderRole.schema';
// prettier-ignore
export const TicketMessageInputSchema = z.object({
    id: z.string(),
    ticketId: z.string(),
    ticket: z.unknown(),
    senderId: z.string(),
    sender: z.unknown(),
    senderRole: SenderRoleSchema,
    content: z.string(),
    attachments: z.unknown().optional().nullable(),
    createdAt: z.coerce.date()
}).strict();

export type TicketMessageInputType = z.infer<typeof TicketMessageInputSchema>;
