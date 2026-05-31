import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    seq: z.number().int().optional()
}).strict();
export const TicketCounterUncheckedCreateInputObjectSchema = makeSchema();
export const TicketCounterUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterUncheckedCreateInput.schema.js.map