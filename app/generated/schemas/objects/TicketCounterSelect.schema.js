import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    seq: z.boolean().optional()
}).strict();
export const TicketCounterSelectObjectSchema = makeSchema();
export const TicketCounterSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterSelect.schema.js.map