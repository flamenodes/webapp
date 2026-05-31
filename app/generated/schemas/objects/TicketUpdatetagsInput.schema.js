import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const TicketUpdatetagsInputObjectSchema = makeSchema();
export const TicketUpdatetagsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketUpdatetagsInput.schema.js.map