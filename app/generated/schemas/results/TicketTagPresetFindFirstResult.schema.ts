import * as z from 'zod';
export const TicketTagPresetFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date()
}));