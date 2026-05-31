import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    ticketId: z.string().optional()
}).strict();
export const TicketWhereUniqueInputObjectSchema = makeSchema();
export const TicketWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketWhereUniqueInput.schema.js.map