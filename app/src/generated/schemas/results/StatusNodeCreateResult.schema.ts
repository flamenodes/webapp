import * as z from 'zod';
export const StatusNodeCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  ip: z.string(),
  location: z.string(),
  type: z.string(),
  port: z.number().int(),
  protocol: z.string(),
  status: z.string(),
  latency: z.number().int().optional(),
  lastChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
  cpu: z.number().optional(),
  memory: z.number().int().optional(),
  disk: z.number().int().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
});