import * as z from 'zod';
export const TicketTagPresetCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date()
});