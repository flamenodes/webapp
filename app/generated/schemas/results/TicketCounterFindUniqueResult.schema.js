import * as z from 'zod';
export const TicketCounterFindUniqueResultSchema = z.nullable(z.object({
    id: z.string(),
    seq: z.number().int()
}));
//# sourceMappingURL=TicketCounterFindUniqueResult.schema.js.map