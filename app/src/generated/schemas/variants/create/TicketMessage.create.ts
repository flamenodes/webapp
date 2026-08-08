import * as z from 'zod';
import { SenderRoleSchema } from '../../enums/SenderRole.schema';
// prettier-ignore
export const TicketMessageCreateSchema = z.object({
    id: z.string(),
    ticketId: z.string(),
    senderId: z.string(),
    senderRole: SenderRoleSchema,
    content: z.string(),
    attachments: z.any().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    sender: z.any(),
    ticket: z.any()
}).strict();

export type TicketMessageCreateType = z.infer<typeof TicketMessageCreateSchema>;
