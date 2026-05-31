import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export const TicketTagPresetCreateManyInputObjectSchema = makeSchema();
export const TicketTagPresetCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetCreateManyInput.schema.js.map