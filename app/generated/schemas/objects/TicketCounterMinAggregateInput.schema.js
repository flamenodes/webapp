import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    seq: z.literal(true).optional()
}).strict();
export const TicketCounterMinAggregateInputObjectSchema = makeSchema();
export const TicketCounterMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterMinAggregateInput.schema.js.map