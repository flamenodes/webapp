import * as z from 'zod';
export const TicketCounterFindFirstResultSchema = z.nullable(z.object({
    id: z.string(),
    seq: z.number().int()
}));
//# sourceMappingURL=TicketCounterFindFirstResult.schema.js.map