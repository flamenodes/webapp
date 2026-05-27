import * as z from 'zod';
export const TicketCounterCreateResultSchema = z.object({
  id: z.string(),
  seq: z.number().int()
});