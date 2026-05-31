import * as z from 'zod';
export const TicketCounterUpdateResultSchema = z.nullable(z.object({
    id: z.string(),
    seq: z.number().int()
}));
//# sourceMappingURL=TicketCounterUpdateResult.schema.js.map