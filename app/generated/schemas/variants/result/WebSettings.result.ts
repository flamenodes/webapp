import * as z from 'zod';
// prettier-ignore
export const WebSettingsResultSchema = z.object({
    id: z.string(),
    key: z.string(),
    value: z.unknown(),
    updatedAt: z.date(),
    createdAt: z.date()
}).strict();

export type WebSettingsResultType = z.infer<typeof WebSettingsResultSchema>;
