import * as z from 'zod';
// prettier-ignore
export const AiSupportConfigCreateSchema = z.object({
    id: z.string(),
    enabled: z.boolean(),
    systemPrompt: z.string(),
    model: z.string(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type AiSupportConfigCreateType = z.infer<typeof AiSupportConfigCreateSchema>;
