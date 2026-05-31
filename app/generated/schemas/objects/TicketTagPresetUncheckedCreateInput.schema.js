import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export const TicketTagPresetUncheckedCreateInputObjectSchema = makeSchema();
export const TicketTagPresetUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetUncheckedCreateInput.schema.js.map