import * as z from 'zod';
export const StatusNodeDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  ip: z.string(),
  location: z.string(),
  type: z.string(),
  port: z.number().int(),
  protocol: z.string(),
  status: z.string(),
  latency: z.number().int().optional(),
  lastChecked: z.date().optional(),
  cpu: z.number().optional(),
  memory: z.number().int().optional(),
  disk: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));