import * as z from 'zod';

export const TicketStatusSchema = z.enum(['OPEN', 'PENDING', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'])

export type TicketStatus = z.infer<typeof TicketStatusSchema>;