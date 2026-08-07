import * as z from 'zod';

export const AiSupportConfigSchema = z.object({
  id: z.string(),
  enabled: z.boolean().default(true),
  systemPrompt: z.string(),
  model: z.string().default("gpt-4o-mini"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type AiSupportConfigType = z.infer<typeof AiSupportConfigSchema>;
