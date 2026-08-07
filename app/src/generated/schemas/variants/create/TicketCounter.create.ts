import * as z from 'zod';
// prettier-ignore
export const TicketCounterCreateSchema = z.object({
    id: z.string(),
    seq: z.number().int()
}).strict();

export type TicketCounterCreateType = z.infer<typeof TicketCounterCreateSchema>;
