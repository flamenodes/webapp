import * as z from 'zod';
// prettier-ignore
export const TicketCounterInputSchema = z.object({
    id: z.string(),
    seq: z.number().int()
}).strict();

export type TicketCounterInputType = z.infer<typeof TicketCounterInputSchema>;
