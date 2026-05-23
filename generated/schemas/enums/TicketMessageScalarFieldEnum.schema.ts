import * as z from 'zod';

export const TicketMessageScalarFieldEnumSchema = z.enum(['id', 'ticketId', 'senderId', 'senderRole', 'content', 'attachments', 'createdAt'])

export type TicketMessageScalarFieldEnum = z.infer<typeof TicketMessageScalarFieldEnumSchema>;