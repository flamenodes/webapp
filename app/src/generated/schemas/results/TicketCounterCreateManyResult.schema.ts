import * as z from 'zod';
export const TicketCounterCreateManyResultSchema = z.object({
  count: z.number()
});