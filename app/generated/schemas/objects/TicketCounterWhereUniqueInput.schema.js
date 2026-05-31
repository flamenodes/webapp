import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const TicketCounterWhereUniqueInputObjectSchema = makeSchema();
export const TicketCounterWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterWhereUniqueInput.schema.js.map