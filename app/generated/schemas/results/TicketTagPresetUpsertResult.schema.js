import * as z from 'zod';
export const TicketTagPresetUpsertResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date()
});
//# sourceMappingURL=TicketTagPresetUpsertResult.schema.js.map