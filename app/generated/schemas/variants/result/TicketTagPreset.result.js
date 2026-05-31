import * as z from 'zod';
// prettier-ignore
export const TicketTagPresetResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date()
}).strict();
//# sourceMappingURL=TicketTagPreset.result.js.map