import * as z from 'zod';

export const TicketCounterScalarFieldEnumSchema = z.enum(['id', 'seq'])

export type TicketCounterScalarFieldEnum = z.infer<typeof TicketCounterScalarFieldEnumSchema>;