import * as z from 'zod';
// prettier-ignore
export const TicketCounterResultSchema = z.object({
    id: z.string(),
    seq: z.number().int()
}).strict();
//# sourceMappingURL=TicketCounter.result.js.map