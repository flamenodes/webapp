import * as z from 'zod';
// prettier-ignore
export const WebSettingsModelSchema = z.object({
    id: z.string(),
    key: z.string(),
    value: z.unknown(),
    updatedAt: z.date(),
    createdAt: z.date()
}).strict();

export type WebSettingsPureType = z.infer<typeof WebSettingsModelSchema>;
