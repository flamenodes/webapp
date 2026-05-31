import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    seq: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const TicketCounterCountAggregateInputObjectSchema = makeSchema();
export const TicketCounterCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterCountAggregateInput.schema.js.map