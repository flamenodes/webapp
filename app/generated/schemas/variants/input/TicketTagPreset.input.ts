import * as z from 'zod';
// prettier-ignore
export const TicketTagPresetInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date()
}).strict();

export type TicketTagPresetInputType = z.infer<typeof TicketTagPresetInputSchema>;
