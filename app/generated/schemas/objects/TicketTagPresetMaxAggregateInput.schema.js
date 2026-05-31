import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    createdAt: z.literal(true).optional()
}).strict();
export const TicketTagPresetMaxAggregateInputObjectSchema = makeSchema();
export const TicketTagPresetMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetMaxAggregateInput.schema.js.map