import * as z from 'zod';
// prettier-ignore
export const WebSettingsInputSchema = z.object({
    id: z.string(),
    key: z.string(),
    value: z.unknown(),
    updatedAt: z.date(),
    createdAt: z.date()
}).strict();

export type WebSettingsInputType = z.infer<typeof WebSettingsInputSchema>;
