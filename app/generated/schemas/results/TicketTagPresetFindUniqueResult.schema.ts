import * as z from 'zod';
export const TicketTagPresetFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date()
}));