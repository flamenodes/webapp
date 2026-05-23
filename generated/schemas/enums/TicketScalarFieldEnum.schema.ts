import * as z from 'zod';

export const TicketScalarFieldEnumSchema = z.enum(['id', 'ticketId', 'title', 'description', 'status', 'priority', 'userId', 'assignedToId', 'channelName', 'tags', 'createdAt', 'updatedAt', 'closedAt'])

export type TicketScalarFieldEnum = z.infer<typeof TicketScalarFieldEnumSchema>;