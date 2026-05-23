import * as z from 'zod';

export const TicketPrioritySchema = z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT'])

export type TicketPriority = z.infer<typeof TicketPrioritySchema>;