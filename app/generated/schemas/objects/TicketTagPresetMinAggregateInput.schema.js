import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    createdAt: z.literal(true).optional()
}).strict();
export const TicketTagPresetMinAggregateInputObjectSchema = makeSchema();
export const TicketTagPresetMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetMinAggregateInput.schema.js.map