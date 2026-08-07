import * as z from 'zod';

export const TicketCounterSchema = z.object({
  id: z.string(),
  seq: z.number().int(),
});

export type TicketCounterType = z.infer<typeof TicketCounterSchema>;
