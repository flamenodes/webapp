import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    seq: z.number().int().optional()
}).strict();
export const TicketCounterCreateManyInputObjectSchema = makeSchema();
export const TicketCounterCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterCreateManyInput.schema.js.map