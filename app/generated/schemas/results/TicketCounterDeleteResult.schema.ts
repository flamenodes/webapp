import * as z from 'zod';
export const TicketCounterDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  seq: z.number().int()
}));