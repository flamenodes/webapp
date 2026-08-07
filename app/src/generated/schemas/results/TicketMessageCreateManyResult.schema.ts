import * as z from 'zod';
export const TicketMessageCreateManyResultSchema = z.object({
  count: z.number()
});