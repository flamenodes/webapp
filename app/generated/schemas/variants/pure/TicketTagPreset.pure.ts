import * as z from 'zod';
// prettier-ignore
export const TicketTagPresetModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date()
}).strict();

export type TicketTagPresetPureType = z.infer<typeof TicketTagPresetModelSchema>;
