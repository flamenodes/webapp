import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    seq: z.literal(true).optional()
}).strict();
export const TicketCounterMaxAggregateInputObjectSchema = makeSchema();
export const TicketCounterMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterMaxAggregateInput.schema.js.map