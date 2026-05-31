import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional()
}).strict();
export const TicketTagPresetSelectObjectSchema = makeSchema();
export const TicketTagPresetSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetSelect.schema.js.map