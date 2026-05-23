import * as z from 'zod';
// prettier-ignore
export const TicketCounterResultSchema = z.object({
    id: z.string(),
    seq: z.number().int()
}).strict();

export type TicketCounterResultType = z.infer<typeof TicketCounterResultSchema>;
