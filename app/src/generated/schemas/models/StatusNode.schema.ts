import * as z from 'zod';

export const StatusNodeSchema = z.object({
  id: z.string(),
  name: z.string(),
  ip: z.string(),
  location: z.string(),
  type: z.string().default("VPS"),
  port: z.number().int().default(80),
  protocol: z.string().default("http"),
  status: z.string().default("unknown"),
  latency: z.number().int().nullish(),
  lastChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullish(),
  cpu: z.number().nullish(),
  memory: z.number().int().nullish(),
  disk: z.number().int().nullish(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type StatusNodeType = z.infer<typeof StatusNodeSchema>;
