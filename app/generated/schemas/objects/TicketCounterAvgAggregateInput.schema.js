import * as z from 'zod';
const makeSchema = () => z.object({
    seq: z.literal(true).optional()
}).strict();
export const TicketCounterAvgAggregateInputObjectSchema = makeSchema();
export const TicketCounterAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterAvgAggregateInput.schema.js.map