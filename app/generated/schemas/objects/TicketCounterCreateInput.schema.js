import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    seq: z.number().int().optional()
}).strict();
export const TicketCounterCreateInputObjectSchema = makeSchema();
export const TicketCounterCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterCreateInput.schema.js.map