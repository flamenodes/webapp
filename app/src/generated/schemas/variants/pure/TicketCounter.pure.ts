import * as z from 'zod';
// prettier-ignore
export const TicketCounterModelSchema = z.object({
    id: z.string(),
    seq: z.number().int()
}).strict();

export type TicketCounterPureType = z.infer<typeof TicketCounterModelSchema>;
