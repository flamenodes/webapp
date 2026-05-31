import * as z from 'zod';
export const TicketCounterUpsertResultSchema = z.object({
    id: z.string(),
    seq: z.number().int()
});
//# sourceMappingURL=TicketCounterUpsertResult.schema.js.map