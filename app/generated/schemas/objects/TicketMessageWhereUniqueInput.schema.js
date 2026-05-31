import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const TicketMessageWhereUniqueInputObjectSchema = makeSchema();
export const TicketMessageWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageWhereUniqueInput.schema.js.map