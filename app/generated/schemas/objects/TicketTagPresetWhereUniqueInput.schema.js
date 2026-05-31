import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string().optional()
}).strict();
export const TicketTagPresetWhereUniqueInputObjectSchema = makeSchema();
export const TicketTagPresetWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetWhereUniqueInput.schema.js.map