import * as z from 'zod';
const makeSchema = () => z.object({
    seq: z.literal(true).optional()
}).strict();
export const TicketCounterSumAggregateInputObjectSchema = makeSchema();
export const TicketCounterSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterSumAggregateInput.schema.js.map