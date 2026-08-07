import * as z from 'zod';
// prettier-ignore
export const TicketTagPresetModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type TicketTagPresetPureType = z.infer<typeof TicketTagPresetModelSchema>;
