import * as z from 'zod';
export const TicketTagPresetDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date()
}));