import * as z from 'zod';
// prettier-ignore
export const WebSettingsResultSchema = z.object({
    id: z.string(),
    key: z.string(),
    value: z.any(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type WebSettingsResultType = z.infer<typeof WebSettingsResultSchema>;
