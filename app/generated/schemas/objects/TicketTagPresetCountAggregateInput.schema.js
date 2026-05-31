import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const TicketTagPresetCountAggregateInputObjectSchema = makeSchema();
export const TicketTagPresetCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetCountAggregateInput.schema.js.map