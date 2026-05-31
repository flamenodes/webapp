import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.string().array()
}).strict();
export const TicketCreatetagsInputObjectSchema = makeSchema();
export const TicketCreatetagsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCreatetagsInput.schema.js.map