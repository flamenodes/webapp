import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export const TicketTagPresetCreateInputObjectSchema = makeSchema();
export const TicketTagPresetCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetCreateInput.schema.js.map