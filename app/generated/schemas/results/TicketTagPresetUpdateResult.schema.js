import * as z from 'zod';
export const TicketTagPresetUpdateResultSchema = z.nullable(z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date()
}));
//# sourceMappingURL=TicketTagPresetUpdateResult.schema.js.map